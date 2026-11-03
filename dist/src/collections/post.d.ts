import { z } from '@arki/contracts';
export declare const posts: import("@content-collections/core").Collection<"posts", z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    image: z.ZodString;
    publishedAt: z.ZodCoercedDate<unknown>;
    author: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    tags: z.ZodArray<z.ZodString>;
    lastModification: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    content: z.ZodString;
}, z.core.$strip>, "frontmatter", import("@content-collections/core").Schema<"frontmatter", z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    image: z.ZodString;
    publishedAt: z.ZodCoercedDate<unknown>;
    author: z.ZodObject<{
        name: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    tags: z.ZodArray<z.ZodString>;
    lastModification: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    content: z.ZodString;
}, z.core.$strip>>, Promise<{
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
}>;
//# sourceMappingURL=post.d.ts.map