/** What one `snapshot` run did. Paths are relative to the app folder. */
export type SnapshotReport = {
    /** Embeds found in the content, one per snapshot file. */
    embeds: number;
    written: {
        file: string;
        url: string;
    }[];
    unchanged: number;
    removed: string[];
    failed: {
        url: string;
        document: string;
        error: string;
    }[];
};
/**
 * Fetches every embed the app's content uses and writes its snapshot under `src/content/.embeds/`, each one checked
 * against the schema the build reads it with. Removes snapshots no document uses any more. A failed fetch keeps the
 * old snapshot and is listed in `failed`. `root` is the app folder.
 */
export declare function snapshotEmbeds(root: string): Promise<SnapshotReport>;
//# sourceMappingURL=snapshot.d.ts.map