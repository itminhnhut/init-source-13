import GhostContentAPI from "@tryghost/content-api";

import { runEnv } from '@/configs/ENV'

import { Params as GhostParams } from '@tryghost/content-api'

const { GHOST_VERSION, GHOST_URL, GHOST_KEY } = runEnv

const apiGhost = new GhostContentAPI({
    url: GHOST_URL as string,
    key: GHOST_KEY as string,
    version: GHOST_VERSION,
});

const BlogsApi = {
    getTagPosts: async (options: GhostParams | any): Promise<any> => {
        return await apiGhost.posts.browse(options)
            .catch(err => {
                throw new Error(err)
            });
        ;
    },
    getPosts: async (options: GhostParams): Promise<any> => {
        return await apiGhost.posts
            .browse(options)
            .catch((err) => {
                console.error(err);
            });
    },
    getSinglePost: async (postSlug: string): Promise<any> => {
        return await apiGhost.posts
            .read({
                slug: postSlug
            }, { include: ['authors', 'tags'] })
            .catch(err => {
                console.error(err);
            });
    }
}

export default BlogsApi