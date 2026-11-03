export { changelogs } from './collections/changelog.js';
export { faqs } from './collections/faq.js';
export { legals } from './collections/legal.js';
export { posts } from './collections/post.js';
export type { Changelog, Faq, Legal, Post } from './models.js';
/** A marketing site's content: blog posts, legal pages, FAQs and changelog entries. */
export declare const marketing: import("@content-collections/core").ConfigurationWithContent<(import("@content-collections/core").Collection<"Changelogs", import("zod").ZodObject<{
    title: import("zod").ZodString;
    description: import("zod").ZodString;
    image: import("zod").ZodString;
    publishedAt: import("zod").ZodCoercedDate<unknown>;
    content: import("zod").ZodString;
}, import("zod/v4/core").$strip>, "frontmatter", import("@content-collections/core").Schema<"frontmatter", import("zod").ZodObject<{
    title: import("zod").ZodString;
    description: import("zod").ZodString;
    image: import("zod").ZodString;
    publishedAt: import("zod").ZodCoercedDate<unknown>;
    content: import("zod").ZodString;
}, import("zod/v4/core").$strip>>, Promise<{
    _meta: import("@content-collections/core").Meta;
    title: string;
    description: string;
    publishedAt: Date;
    content: {
        mdx: string;
        raw: string;
    };
    image: {
        url: string;
        blurDataURL: string;
    };
    url: string;
    slug: string;
}>, {
    _meta: {
        filePath: string;
        fileName: string;
        directory: string;
        path: string;
        extension: string;
    };
    title: string;
    description: string;
    publishedAt: Date;
    content: {
        mdx: string;
        raw: string;
    };
    image: {
        url: string;
        blurDataURL: string;
    };
    url: string;
    slug: string;
}> | import("@content-collections/core").Collection<"FAQs", import("zod").ZodObject<{
    title: import("zod").ZodString;
    order: import("zod").ZodNumber;
    content: import("zod").ZodString;
}, import("zod/v4/core").$strip>, "frontmatter", import("@content-collections/core").Schema<"frontmatter", import("zod").ZodObject<{
    title: import("zod").ZodString;
    order: import("zod").ZodNumber;
    content: import("zod").ZodString;
}, import("zod/v4/core").$strip>>, Promise<{
    _meta: import("@content-collections/core").Meta;
    title: string;
    order: number;
    content: string;
    mdx: string;
    slug: string;
}>, {
    _meta: {
        filePath: string;
        fileName: string;
        directory: string;
        path: string;
        extension: string;
    };
    title: string;
    order: number;
    content: string;
    mdx: string;
    slug: string;
}> | import("@content-collections/core").Collection<"Legals", import("zod").ZodObject<{
    title: import("zod").ZodString;
    updatedAt: import("zod").ZodString;
    content: import("zod").ZodString;
}, import("zod/v4/core").$strip>, "frontmatter", import("@content-collections/core").Schema<"frontmatter", import("zod").ZodObject<{
    title: import("zod").ZodString;
    updatedAt: import("zod").ZodString;
    content: import("zod").ZodString;
}, import("zod/v4/core").$strip>>, Promise<{
    _meta: import("@content-collections/core").Meta;
    title: string;
    updatedAt: string;
    content: string;
    mdx: string;
    slug: string;
}>, {
    _meta: {
        filePath: string;
        fileName: string;
        directory: string;
        path: string;
        extension: string;
    };
    title: string;
    updatedAt: string;
    content: string;
    mdx: string;
    slug: string;
}> | import("@content-collections/core").Collection<"posts", import("zod").ZodObject<{
    title: import("zod").ZodString;
    description: import("zod").ZodString;
    image: import("zod").ZodString;
    publishedAt: import("zod").ZodCoercedDate<unknown>;
    author: import("zod").ZodObject<{
        name: import("zod").ZodString;
        url: import("zod").ZodOptional<import("zod").ZodString>;
        avatar: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod/v4/core").$strip>;
    tags: import("zod").ZodArray<import("zod").ZodString>;
    lastModification: import("zod").ZodOptional<import("zod").ZodCoercedDate<unknown>>;
    content: import("zod").ZodString;
}, import("zod/v4/core").$strip>, "frontmatter", import("@content-collections/core").Schema<"frontmatter", import("zod").ZodObject<{
    title: import("zod").ZodString;
    description: import("zod").ZodString;
    image: import("zod").ZodString;
    publishedAt: import("zod").ZodCoercedDate<unknown>;
    author: import("zod").ZodObject<{
        name: import("zod").ZodString;
        url: import("zod").ZodOptional<import("zod").ZodString>;
        avatar: import("zod").ZodOptional<import("zod").ZodString>;
    }, import("zod/v4/core").$strip>;
    tags: import("zod").ZodArray<import("zod").ZodString>;
    lastModification: import("zod").ZodOptional<import("zod").ZodCoercedDate<unknown>>;
    content: import("zod").ZodString;
}, import("zod/v4/core").$strip>>, Promise<{
    _meta: import("@content-collections/core").Meta;
    title: string;
    description: string;
    publishedAt: Date;
    author: {
        name: string;
        url?: string | undefined;
        avatar?: string | undefined;
    };
    tags: string[];
    content: {
        mdx: string;
        raw: string;
    };
    readingTime: string;
    lastModification: string | undefined;
    image: {
        url: string;
        blurDataURL: string;
    };
    url: string;
    slug: string;
}>, {
    _meta: {
        filePath: string;
        fileName: string;
        directory: string;
        path: string;
        extension: string;
    };
    title: string;
    description: string;
    publishedAt: Date;
    author: {
        name: string;
        url?: string | undefined;
        avatar?: string | undefined;
    };
    tags: string[];
    content: {
        mdx: string;
        raw: string;
    };
    readingTime: string;
    lastModification: string | undefined;
    image: {
        url: string;
        blurDataURL: string;
    };
    url: string;
    slug: string;
}>)[]>;
//# sourceMappingURL=presets.d.ts.map