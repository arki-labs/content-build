import { z } from '@arki/contracts';
import type { TweetEmbed } from '../embeds.js';
/** A tweet as its snapshot stores it: the syndication API's answer, cut to the fields the tweet card shows. */
export declare const tweetSnapshotSchema: z.ZodObject<{
    id_str: z.ZodString;
    text: z.ZodString;
    created_at: z.ZodString;
    user: z.ZodObject<{
        name: z.ZodString;
        screen_name: z.ZodString;
        profile_image_url_https: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
type TweetSnapshot = z.infer<typeof tweetSnapshotSchema>;
/** The `tweet` prop of `<StaticTweet>`. */
export declare const tweetProps: (tweet: TweetSnapshot) => {
    id: string;
    text: string;
    createdAt: string;
    author: {
        name: string;
        username: string;
        profileImageUrl: string;
    };
    url: string;
};
/** Fetches a tweet from Twitter's syndication API (no key needed). */
export declare function fetchTweet(embed: TweetEmbed): Promise<TweetSnapshot>;
export {};
//# sourceMappingURL=index.d.ts.map