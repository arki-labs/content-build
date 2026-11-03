import path from 'node:path';
import { visit } from 'unist-util-visit';
/** Where an app commits its embed snapshots, relative to the app folder. One JSON file per embed. */
export const EMBEDS_FOLDER = path.join('src', 'content', '.embeds');
/** The app script that fetches the snapshots (`arki-content snapshot`). */
export const SNAPSHOT_SCRIPT = 'content:snapshot';
const digits = /^\d+$/;
function parseUrl(value) {
    try {
        return new URL(value.startsWith('http') ? value : `https://${value}`);
    }
    catch {
        return undefined;
    }
}
/** The embed a URL names: a GitHub issue or pull request, or a tweet. Any other URL is not an embed. */
export function embedFromUrl(value) {
    const url = parseUrl(value);
    if (url === undefined)
        return undefined;
    const parts = url.pathname.split('/').filter(part => part !== '');
    if (url.hostname === 'github.com') {
        const [owner, repo, type, number] = parts;
        if (owner && repo && (type === 'issues' || type === 'pull') && number && digits.test(number)) {
            return { kind: type === 'issues' ? 'issue' : 'pull', url: url.toString(), owner, repo, number: Number(number) };
        }
    }
    if (url.hostname === 'twitter.com') {
        const status = parts.indexOf('status');
        const id = parts[status + 1];
        if (status > 0 && id && digits.test(id))
            return { kind: 'tweet', url: url.toString(), id };
    }
    return undefined;
}
/** The URL of a link written as its own text (`<https://…>` or a bare URL), with no title. */
function bareLinkUrl(node) {
    const [text] = node.children;
    return !node.title && node.children.length === 1 && text?.type === 'text' && text.value === node.url
        ? node.url
        : undefined;
}
function urlOf(node) {
    if (node.type === 'text')
        return node.value;
    if (node.type === 'link')
        return bareLinkUrl(node);
    return undefined;
}
/**
 * Every paragraph that holds nothing but an embed URL. The build turns these into embeds; `arki-content snapshot`
 * fetches them. Both call this, so they always agree on what is an embed.
 */
export function findEmbeds(tree) {
    const found = [];
    visit(tree, 'paragraph', paragraph => {
        const [only] = paragraph.children;
        if (paragraph.children.length !== 1 || only === undefined)
            return;
        const url = urlOf(only);
        const embed = url === undefined ? undefined : embedFromUrl(url);
        if (embed !== undefined)
            found.push({ paragraph, embed });
    });
    return found;
}
/** The embed's snapshot file, relative to {@link EMBEDS_FOLDER}. GitHub names are case-insensitive, so lower-cased. */
export function snapshotFile(embed) {
    if (embed.kind === 'tweet')
        return path.join('twitter', `${embed.id}.json`);
    const type = embed.kind === 'issue' ? 'issues' : 'pull';
    return path.join('github', embed.owner.toLowerCase(), embed.repo.toLowerCase(), type, `${embed.number}.json`);
}
