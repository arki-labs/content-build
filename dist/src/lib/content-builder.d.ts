import type { Modification } from '@content-collections/core';
/** The config file every app keeps in its root folder, next to `package.json`. */
export declare const CONTENT_CONFIG_FILE = "content.config.ts";
/** Thrown by {@link ContentBuilder.build} when any content file failed. `problems` lists one line per file. */
export declare class ContentBuildError extends Error {
    readonly problems: readonly string[];
    constructor(problems: readonly string[]);
}
/** What one build produced: counts and duration, for a log line. */
export type ContentBuildStats = {
    collections: number;
    documents: number;
    ms: number;
};
export type ContentBuilder = {
    /** Builds every collection. Rejects with {@link ContentBuildError} when a file failed to read, parse, validate or transform. */
    build: () => Promise<ContentBuildStats>;
    /**
     * Rebuilds after one file changed. A file in a document's own folder (a component, an image) rebuilds that
     * folder's `index.mdx`. Resolves with the problems found, so a dev server can show them and keep running.
     */
    sync: (modification: Modification, filePath: string) => Promise<readonly string[]>;
};
/**
 * Reads `configPath` and returns a builder for it. The current folder must be the config's folder: collection
 * directories, copied images and git dates all resolve against it.
 */
export declare function createContentBuilder(configPath: string): Promise<ContentBuilder>;
//# sourceMappingURL=content-builder.d.ts.map