import type { CollectionContext, Meta } from '@content-collections/core';
import type { Options as MdxOptions } from '@content-collections/mdx';
type MdxDocument = {
    _meta: Meta;
    content: string;
};
/** `compileMDX` from `@content-collections/mdx`, with a cache key that changes when images, components or options do. */
export declare function compileMDX(context: Pick<CollectionContext, 'cache' | 'collection'>, document: MdxDocument, options?: MdxOptions): Promise<string>;
export {};
//# sourceMappingURL=compile-mdx.d.ts.map