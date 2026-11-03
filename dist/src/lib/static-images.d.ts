import type { Root } from 'hast';
import type { Plugin } from 'unified';
type Options = {
    sourceRoot: string;
    publicDir: string;
    resourcePath: string;
};
declare const staticImages: Plugin<[Options], Root>;
export declare const staticCoverImage: (sourceRoot: string, targetRoot: string, resourcePath: string, directory: string, image: string) => Promise<string>;
export default staticImages;
//# sourceMappingURL=static-images.d.ts.map