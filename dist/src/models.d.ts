import type { GetTypeByName } from '@content-collections/core';
import type { changelogs } from './collections/changelog.js';
import type { faqs } from './collections/faq.js';
import type { legals } from './collections/legal.js';
import type { posts } from './collections/post.js';
export type Post = GetTypeByName<{
    content: [typeof posts];
}, 'posts'>;
export type Changelog = GetTypeByName<{
    content: [typeof changelogs];
}, 'Changelogs'>;
export type Faq = GetTypeByName<{
    content: [typeof faqs];
}, 'FAQs'>;
export type Legal = GetTypeByName<{
    content: [typeof legals];
}, 'Legals'>;
//# sourceMappingURL=models.d.ts.map