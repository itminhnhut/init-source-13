import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RelatedThumbnail = () => (
    <Link href="/blog/1" className="inline-block">
        <div className="flex gap-3">
            <Image
                src="/images/blog-image.png"
                className="!static !h-[94px]  rounded-lg object-cover"
                fill
                alt="blog-image"
            />
            <div className="text-sm text-gray-2">Tune In on May 30 to Binance Talks: Paying With Crypto</div>
        </div>
    </Link>
)

const RelatedPosts = () => {
    return (
        <div className="space-y-6">
            <div className="text-xl">Related Posts</div>
            <div className="space-y-6">
                {[1, 2, 3, 4].map((e) => (
                    <RelatedThumbnail key={e} />
                ))}
            </div>
        </div>
    )
}

export default RelatedPosts
