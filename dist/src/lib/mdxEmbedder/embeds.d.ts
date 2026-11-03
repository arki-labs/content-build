import type { Paragraph, Root } from 'mdast';
/** Where an app commits its embed snapshots, relative to the app folder. One JSON file per embed. */
export declare const EMBEDS_FOLDER: string;
/** The app script that fetches the snapshots (`arki-content snapshot`). */
export declare const SNAPSHOT_SCRIPT = "content:snapshot";
export type GitHubEmbed = {
    kind: 'issue' | 'pull';
    url: string;
    owner: string;
    repo: string;
    number: number;
};
export type TweetEmbed = {
    kind: 'tweet';
    url: string;
    id: string;
};
export type Embed = GitHubEmbed | TweetEmbed;
/** A paragraph that holds only an embed link, and the embed it names. */
export type FoundEmbed = {
    paragraph: Paragraph;
    embed: Embed;
};
/** The embed a URL names: a GitHub issue or pull request, or a tweet. Any other URL is not an embed. */
export declare function embedFromUrl(value: string): Embed | undefined;
/**
 * Every paragraph that holds nothing but an embed URL. The build turns these into embeds; `arki-content snapshot`
 * fetches them. Both call this, so they always agree on what is an embed.
 */
export declare function findEmbeds(tree: Root): FoundEmbed[];
/** The embed's snapshot file, relative to {@link EMBEDS_FOLDER}. GitHub names are case-insensitive, so lower-cased. */
export declare function snapshotFile(embed: Embed): string;
//# sourceMappingURL=embeds.d.ts.map