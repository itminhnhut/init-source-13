import dynamic from 'next/dynamic'
import React from 'react'

const Blogs = dynamic(() => import('@/features/blogs'), { ssr: false })

const index = () => {
    return (
        <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-screen-xxl items-center justify-center px-4 mb:px-0">
            <Blogs />
        </section>
    )
}

export default index
