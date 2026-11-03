import type { Paragraph } from 'mdast';
import { z } from '@arki/contracts';
/** `value` checked against `schema`; throws naming `what` and every mismatch when it does not fit. */
export declare function parseWith<T>(schema: z.ZodType<T>, value: unknown, what: string): T;
export declare const createJSONParseAST: (value: string) => {
    type: string;
    body: {
        type: string;
        expression: {
            type: string;
            callee: {
                type: string;
                object: {
                    type: string;
                    name: string;
                };
                property: {
                    type: string;
                    name: string;
                };
                computed: boolean;
                optional: boolean;
            };
            arguments: {
                type: string;
                value: string;
                raw: string;
            }[];
            optional: boolean;
        };
    }[];
    sourceType: string;
    comments: never[];
};
/** Turns the paragraph into `<name {...props} />` in place; each prop is passed as JSON. */
export declare function replaceWithElement(paragraph: Paragraph, name: string, props: Record<string, unknown>): void;
//# sourceMappingURL=utils.d.ts.map