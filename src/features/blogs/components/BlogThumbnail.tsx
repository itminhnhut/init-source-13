import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogThumbnail: React.FC = () => {
    return (
        <Link href="/blogs/1" passHref className="inline-block w-full">
            <div className="relative h-full rounded-[20px] bg-black-1 p-4 transition hover:bg-black-1 mb:bg-transparent">
                <div className="space-y-2">
                    <Image
                        src="/images/blog-image.png"
                        className="!mb:h-[205px] !static !h-[185px]  rounded-lg object-cover"
                        fill
                        alt="blog-image"
                    />
                    <div className="font-medium">Tune In on May 30 to Binance Talks: Paying With Crypto</div>
                </div>
            </div>
        </Link>
    )
}

export default BlogThumbnail
