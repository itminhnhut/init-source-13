import dynamic from 'next/dynamic'
import React from 'react'

import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'

const BlogDetail = dynamic(() => import('@/features/blogs/components/BlogDetail'), { ssr: false })
const IconButton = dynamic(() => import('@/components/Elements/Button/IconButton'), { ssr: false })

const index = () => {
    return (
        <section className="min-h-[calc(100vh-80px)] pb-[120px]">
            <div className="mb-8 !bg-black-1 py-[22px]">
                <div className="mx-auto max-w-screen-xxl">
                    <Link href="/blogs">
                        <IconButton className="!w-auto px-4 py-2 text-sm font-medium text-white">
                            Back to page
                        </IconButton>
                    </Link>
                </div>
            </div>
            <section className="mx-auto flex max-w-screen-xxl px-4 mb:px-0 ">
                <BlogDetail />
            </section>
        </section>
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
