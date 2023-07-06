import React from 'react'

import dynamic from 'next/dynamic'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Params as GhostParams } from '@tryghost/content-api'

import BlogsApi from '@/src/services/GhostClient'

import GHOST_DETAIL from '@/types/blogs'

const Blogs = dynamic(() => import('@/features/blogs'), { ssr: false })

type Props = {
    posts: GHOST_DETAIL[]
}

const index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <section className="page-container flex min-h-[calc(100vh-80px)] items-center justify-center px-4 lg:px-[112px]">
            <Blogs dataBlogs={posts} />
        </section>
    )
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
    const options: GhostParams = {
        limit: 10,
        include: ['tags', 'authors'],
        order: 'published_at DESC',
        // filter: `tags:news`
    }
    const result = await BlogsApi.getPosts(options)
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
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    }
}

export default index
