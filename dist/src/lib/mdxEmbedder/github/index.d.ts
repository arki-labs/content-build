import { z } from '@arki/contracts';
import type { GitHubEmbed } from '../embeds.js';
/** An issue or pull request as its snapshot stores it: the fields the GitHub card shows. */
export declare const gitHubItemSchema: z.ZodObject<{
    number: z.ZodNumber;
    url: z.ZodString;
    titleHTML: z.ZodString;
    createdAt: z.ZodString;
    author: z.ZodObject<{
        login: z.ZodString;
        avatarUrl: z.ZodString;
        url: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Issue = z.infer<typeof gitHubItemSchema>;
/** Fetches an issue or pull request from GitHub's GraphQL API, which needs `GITHUB_TOKEN`. */
export declare function fetchGitHubItem(embed: GitHubEmbed): Promise<Issue>;
//# sourceMappingURL=index.d.ts.map