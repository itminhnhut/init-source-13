import GHOST_DETAIL from '@/types/blogs'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const RelatedThumbnail = ({ title, feature_image, slug }: any) => (
    <Link href={`/blogs/${slug}`} className="inline-block">
        <div className="flex gap-3">
            <Image src={feature_image} className="!static !w-1/2 rounded-lg object-cover" fill alt="blog-image" />
            <div className="text-sm text-gray-2">{title}</div>
        </div>
    </Link>
)

type RelatedPostsProps = {
    tabPosts: GHOST_DETAIL[]
}

const RelatedPosts = ({ tabPosts }: RelatedPostsProps) => {
    return (
        <div className="space-y-6">
            <div className="text-xl">Related Posts</div>
            <motion.div
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            delayChildren: 0,
                            staggerChildren: 0.05,
                        },
                    },
                }}
                initial="hidden"
                animate="show"
                className="space-y-6"
            >
                {tabPosts?.map((tag) => (
                    <motion.div
                        className="transition-opacity hover:!opacity-80"
                        key={tag.id}
                        variants={{
                            hidden: {
                                scale: 0.95,
                                opacity: 0,
                            },
                            show: {
                                scale: 1,
                                opacity: 1,
                            },
                        }}
                    >
                        <RelatedThumbnail title={tag.title} feature_image={tag.feature_image} slug={tag.slug} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default RelatedPosts
