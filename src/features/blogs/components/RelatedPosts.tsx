import React from 'react'

import Image from 'next/image'
import Link from 'next/link'


const RelatedThumbnail = ({ title, feature_image, slug }) => (
    <Link href={`/blogs/${slug}`} className="inline-block">
        <div className="flex gap-3">
            <Image
                src={feature_image}
                className="!static !h-[94px] rounded-lg object-cover"
                fill
                alt="blog-image"
            />
            <div className="text-sm text-gray-2">T{title}</div>
        </div>
    </Link>
)

const RelatedPosts = ({ tabPosts }: any) => {
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
