import dynamic from 'next/dynamic'
import React from 'react'

import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const BlogDetail = dynamic(() => import('@/features/blogs/components/BlogDetail'), { ssr: false })

const index = () => {
    return (
        <main className="min-h-[calc(100vh-80px)] pb-[120px]">
            <BlogDetail />
        </main>
    )
}

export default index
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: ['/blogs/2'],
        fallback: true,
    }
}
