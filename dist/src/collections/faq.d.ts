import { z } from '@arki/contracts';
export declare const faqs: import("@content-collections/core").Collection<"FAQs", z.ZodObject<{
    title: z.ZodString;
    order: z.ZodNumber;
    content: z.ZodString;
}, z.core.$strip>, "frontmatter", import("@content-collections/core").Schema<"frontmatter", z.ZodObject<{
    title: z.ZodString;
    order: z.ZodNumber;
    content: z.ZodString;
}, z.core.$strip>>, Promise<{
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
}>;
//# sourceMappingURL=faq.d.ts.map