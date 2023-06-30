import dynamic from 'next/dynamic'
import React from 'react'

import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Blogs = dynamic(() => import('@/features/blogs'), { ssr: false })

const index = () => {
    return (
        <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-screen-xxl items-center justify-center px-4 mb:px-0 ">
            <Blogs />
        </section>
    )
}

export default index
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common', 'home'])),
        },
    }
}
