import dynamic from 'next/dynamic'
import React from 'react'

import type { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import BlogsApi from '@/src/services/GhostClient'


const BlogDetail = dynamic(() => import('@/features/blogs/components/BlogDetail'), { ssr: false })

type props = {
    posts: any
    tabPosts: any
}

const index = ({ posts, tabPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <main className="min-h-[calc(100vh-80px)] pb-[120px] px-4 lg:px-[112px]">
            <BlogDetail detail={posts} tabPosts={tabPosts} />
        </main>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const allPosts = await BlogsApi.getPosts({
        include: 'tags',
        limit: 10,
    });
    return {
        paths: allPosts.map(({ slug }: any) => {
            return {
                params: { slug },
            };
        }),
        fallback: true,
    };
}

export const getStaticProps: GetStaticProps<props> = async ({ locale, params }) => {
    const result = await BlogsApi.getSinglePost(params?.slug as string);
    const filter = `id:-${result.id}+tag:${result?.primary_tag.slug}`
    const options = {
        page: 1,
        limit: 4,
        include: ['tags', 'authors'],
        filter,
    }

    const rsTabPosts = await BlogsApi.getTagPosts(options);

    if (!result) {
        return {
            redirect: {
                permanent: false,
                destination: '/404',
            },
        }
    }
    return {
        props: {
            posts: result,
            tabPosts: rsTabPosts,
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    }
}

export default index
