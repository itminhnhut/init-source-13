import Image from 'next/image'
import Link from 'next/link'

import GHOST_DETAIL from "@/types/blogs";

const RelatedThumbnail = ({ title, feature_image, slug }: any) => (
    <Link href={`/blogs/${slug}`} className="inline-block">
        <div className="flex gap-3">
            <Image
                src={feature_image}
                className="!static !w-1/2 rounded-lg object-cover"
                fill
                alt="blog-image"
            />
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
            <div className="space-y-6">
                {tabPosts?.map((tag) => (
                    <RelatedThumbnail key={tag.id} title={tag.title} feature_image={tag.feature_image} slug={tag.slug} />
                ))}
            </div>
        </div>
    )
}

export default RelatedPosts
