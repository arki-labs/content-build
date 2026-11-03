import { z } from '@arki/contracts';
export declare const legals: import("@content-collections/core").Collection<"Legals", z.ZodObject<{
    title: z.ZodString;
    updatedAt: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>, "frontmatter", import("@content-collections/core").Schema<"frontmatter", z.ZodObject<{
    title: z.ZodString;
    updatedAt: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>>, Promise<{
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
}>;
//# sourceMappingURL=legal.d.ts.map