import type { Plugin } from 'vite';
/**
 * Builds the app's `content.config.ts` into `.content-collections/generated` (imported as `content-collections`).
 * `vite build` builds once and fails on any broken content file; `vite dev` rebuilds on change and only reports.
 */
export declare function contentPlugin(): Plugin;
//# sourceMappingURL=vite.d.ts.map