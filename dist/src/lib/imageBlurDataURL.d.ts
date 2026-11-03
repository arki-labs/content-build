export type RemoteImageLimits = {
    /** A remote cover that does not answer within this time fails the build instead of stalling it. Default 15 s. */
    timeoutMs?: number;
    /** The most bytes read from a remote cover: a placeholder never needs more, and a wrong URL must not fill memory. Default 20 MiB. */
    maxBytes?: number;
};
/**
 * A local image is keyed by its bytes, so two posts with a `cover.jpg` get their own placeholder and a replaced
 * image gets a new one. A remote image is keyed by its URL, so the build does not download it again.
 */
declare const resolveImageBlurDataURL: (sourceRoot: string, directory: string, image: string, limits?: RemoteImageLimits) => Promise<string>;
export default resolveImageBlurDataURL;
//# sourceMappingURL=imageBlurDataURL.d.ts.map