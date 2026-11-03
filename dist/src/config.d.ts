import type { AnyContent, ConfigurationWithContent } from '@content-collections/core';
export type { GetTypeByName, Meta } from '@content-collections/core';
export { defineCollection } from '@content-collections/core';
export { compileMarkdown } from './lib/compile-markdown.js';
export type { CompiledMarkdown, CompileMarkdownOptions, MarkdownHeading } from './lib/compile-markdown.js';
export { compileMDX } from './lib/compile-mdx.js';
export { default as resolveImageBlurDataURL } from './lib/imageBlurDataURL.js';
export { addIdToHeadings } from './plugins/add-id-to-headings.js';
/** The app's content config: its collections, plus the hooks that keep generated files stable and self-contained. */
export declare function defineContentConfig<TCollections extends AnyContent[]>(config: {
    content: TCollections;
}): ConfigurationWithContent<TCollections>;
//# sourceMappingURL=config.d.ts.map