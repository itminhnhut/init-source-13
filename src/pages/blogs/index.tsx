import dynamic from 'next/dynamic'
import React from 'react'

import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Blogs = dynamic(() => import('@/features/blogs'), { ssr: false })

const index = () => {
    return (
        <section className="page-container flex min-h-[calc(100vh-80px)] items-center justify-center">
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
