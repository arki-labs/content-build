/** One heading of the page, in document order: what an on-page table of contents lists. */
export type MarkdownHeading = {
    depth: number;
    text: string;
    id: string;
};
export type CompiledMarkdown = {
    html: string;
    headings: MarkdownHeading[];
};
export type CompileMarkdownOptions = {
    /**
     * Called with the `href` of every link. Return a new `href`, `null` to drop the link and keep its text, or
     * `undefined` to keep the link as written.
     */
    rewriteLink?: (href: string) => string | null | undefined;
    /**
     * Keep raw HTML in the markdown exactly as written (scripts, event handlers and all). Default `false`: raw HTML is
     * parsed and then cleaned with `rehype-sanitize`'s GitHub-style rules, so a hostile document cannot inject script.
     * Set it only for markdown your own team wrote.
     */
    trustedHtml?: boolean;
};
/**
 * Compiles plain GitHub-flavoured markdown (not MDX: `<` and `{` in prose stay text) to HTML with this package's own
 * plugins: GFM, GitHub-style heading ids, autolinked headings and code blocks highlighted by `rehype-pretty-code`
 * (light and dark themes as `--shiki-light` / `--shiki-dark` CSS variables). Raw HTML in the markdown is sanitized
 * (GitHub's rules: no `<script>`, no event handlers, no `javascript:` links) unless `trustedHtml` is set.
 */
export declare function compileMarkdown(markdown: string, options?: CompileMarkdownOptions): Promise<CompiledMarkdown>;
//# sourceMappingURL=compile-markdown.d.ts.map