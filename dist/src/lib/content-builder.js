import { existsSync } from 'node:fs';
import path from 'node:path';
import { createBuilder } from '@content-collections/core';
import { getLogger } from '@arki/log';
const logger = getLogger('arki:content-build');
/** The config file every app keeps in its root folder, next to `package.json`. */
export const CONTENT_CONFIG_FILE = 'content.config.ts';
/**
 * Works like the emitter `@content-collections/core` builds for itself (it does not export it). We pass our own so the
 * error listeners exist before `createBuilder` reads the files: upstream reads them inside `createBuilder`, and an
 * error emitted with no listener is lost and the document silently dropped.
 */
function createEmitter() {
    const listeners = new Map();
    const notify = (key, event) => {
        for (const listener of listeners.get(key) ?? [])
            listener(event);
    };
    return {
        on: (key, listener) => {
            listeners.set(key, [...(listeners.get(key) ?? []), listener]);
        },
        emit: (key, event) => {
            notify(key, event);
            if ('error' in event)
                notify('_error', { ...event, _event: key });
            notify('_all', { ...event, _event: key });
        },
    };
}
function documentPath(collection, file) {
    return 'filePath' in collection ? collection.filePath : path.join(collection.directory, file);
}
/** Thrown by {@link ContentBuilder.build} when any content file failed. `problems` lists one line per file. */
export class ContentBuildError extends Error {
    problems;
    constructor(problems) {
        super(`content build failed:\n${problems.map(problem => `  ${problem}`).join('\n')}`);
        this.name = 'ContentBuildError';
        this.problems = problems;
    }
}
/** The `index.mdx` of the nearest folder above `filePath`, stopping at the app root. */
function ownerDocument(filePath, root) {
    for (let directory = path.dirname(filePath); directory.startsWith(root + path.sep); directory = path.dirname(directory)) {
        const candidate = path.join(directory, 'index.mdx');
        if (candidate !== filePath && existsSync(candidate))
            return candidate;
    }
    return undefined;
}
/**
 * Reads `configPath` and returns a builder for it. The current folder must be the config's folder: collection
 * directories, copied images and git dates all resolve against it.
 */
export async function createContentBuilder(configPath) {
    const configFile = path.resolve(configPath);
    const root = path.dirname(configFile);
    if (root !== process.cwd()) {
        throw new Error(`@arki/content-build: run from ${root}, the folder of ${path.basename(configFile)} (the current folder is ${process.cwd()})`);
    }
    const problems = [];
    const emitter = createEmitter();
    emitter.on('collector:read-error', ({ filePath, error }) => problems.push(`${filePath}: ${error.message}`));
    emitter.on('collector:parse-error', ({ filePath, error }) => problems.push(`${filePath}: ${error.message}`));
    emitter.on('transformer:validation-error', ({ collection, file, error }) => problems.push(`${documentPath(collection, file.path)}: ${error.message}`));
    emitter.on('transformer:error', ({ collection, error }) => problems.push(`${collection.name}: ${error.message}`));
    emitter.on('transformer:result-error', ({ collection, error }) => problems.push(`${collection.name}: ${error.message}`));
    emitter.on('watcher:config-reload-error', ({ error }) => problems.push(error.message));
    let lastBuild = { collections: 0, documents: 0, ms: 0 };
    emitter.on('builder:end', ({ startedAt, endedAt, stats }) => {
        lastBuild = { ...stats, ms: endedAt - startedAt };
        logger.debug('built {collections} collections, {documents} documents in {ms}ms', lastBuild);
    });
    const builder = await createBuilder(configFile, undefined, emitter);
    const takeProblems = () => problems.splice(0);
    return {
        build: async () => {
            await builder.build();
            const found = takeProblems();
            if (found.length > 0)
                throw new ContentBuildError(found);
            return lastBuild;
        },
        sync: async (modification, filePath) => {
            if (!(await builder.sync(modification, filePath))) {
                const owner = ownerDocument(filePath, root);
                if (owner !== undefined)
                    await builder.sync('update', owner);
            }
            return takeProblems();
        },
    };
}
