import React from 'react'
import RelatedPosts from './RelatedPosts'
import TeamSocials from '@/features/team/components/TeamSocials'
import BackToSection from './BackToSection'

import GHOST_DETAIL from '@/types/blogs'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

type BlogDetailProps = {
    detail: GHOST_DETAIL
    tabPosts: GHOST_DETAIL[]
}

const BlogDetail = ({ detail, tabPosts }: BlogDetailProps) => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <div>
            <BackToSection />

            <section className="page-container">
                <div className=" -m-10 flex flex-wrap">
                    <div className="w-full p-10 mb:w-3/5">
                        <div className="mb-8" dangerouslySetInnerHTML={{ __html: detail?.html }} />
                        <div className="flex items-center gap-4">
                            <TeamSocials />
                        </div>
                    </div>
                    <div className="w-full p-10 mb:w-2/5">
                        <RelatedPosts tabPosts={tabPosts} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogDetail
