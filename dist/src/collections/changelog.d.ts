import { z } from '@arki/contracts';
export declare const changelogs: import("@content-collections/core").Collection<"Changelogs", z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    image: z.ZodString;
    publishedAt: z.ZodCoercedDate<unknown>;
    content: z.ZodString;
}, z.core.$strip>, "frontmatter", import("@content-collections/core").Schema<"frontmatter", z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    image: z.ZodString;
    publishedAt: z.ZodCoercedDate<unknown>;
    content: z.ZodString;
}, z.core.$strip>>, Promise<{
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
}>;
//# sourceMappingURL=changelog.d.ts.map