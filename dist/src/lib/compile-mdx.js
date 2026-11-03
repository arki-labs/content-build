import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { compileMDX as compileUpstreamMDX } from '@content-collections/mdx';
import { EMBEDS_FOLDER } from './mdxEmbedder/embeds.js';
/** Every file below `directory`, sorted so the hash does not depend on read order. */
async function filesBelow(directory) {
    if (!existsSync(directory))
        return [];
    const entries = await readdir(directory, { recursive: true, withFileTypes: true });
    return entries
        .filter(entry => entry.isFile())
        .map(entry => path.join(entry.parentPath, entry.name))
        .toSorted();
}
/** Runs `options.files` against a recording appender: the files upstream will add to the bundle. */
function appendedFiles(options) {
    const appended = { contents: new Array(), paths: new Array(), directories: new Array() };
    const appender = {
        content: (importPath, content) => {
            appended.contents.push(`${importPath}\n${content}`);
        },
        file: (_importPath, filePath) => {
            appended.paths.push(filePath);
        },
        directory: (_importPath, directoryPath) => {
            appended.directories.push(directoryPath);
        },
    };
    options?.files?.(appender);
    return appended;
}
/**
 * Upstream keys compiled MDX on the document text alone. This hash adds what else changes the output: the options
 * (plugin names and their settings), the appended files, every file in the document's own folder (its images
 * and components), and the embed snapshots. Code changes inside `@arki/content-build` plugins are not seen: clear
 * `.content-collections/cache`.
 */
async function fingerprint(collectionDirectory, document, options) {
    const hash = createHash('sha256');
    hash.update(JSON.stringify(options ?? {}, (_key, value) => (typeof value === 'function' ? `fn:${value.name}` : value)));
    const appended = appendedFiles(options);
    const files = [...appended.paths];
    for (const directory of appended.directories)
        files.push(...(await filesBelow(directory)));
    // A refreshed embed snapshot must recompile the documents that embed it.
    files.push(...(await filesBelow(EMBEDS_FOLDER)));
    if (document._meta.directory !== '.') {
        files.push(...(await filesBelow(path.join(collectionDirectory, document._meta.directory))));
    }
    for (const content of appended.contents)
        hash.update(content);
    for (const file of files) {
        hash.update(file);
        hash.update(existsSync(file) ? await readFile(file) : '');
    }
    return hash.digest('hex');
}
/** `compileMDX` from `@content-collections/mdx`, with a cache key that changes when images, components or options do. */
export async function compileMDX(context, document, options) {
    const salt = await fingerprint(context.collection.directory, document, options);
    const cache = (input, compute, cacheOptions) => context.cache({ input, salt }, salted => compute(salted.input), cacheOptions);
    return compileUpstreamMDX({ cache }, document, options);
}
