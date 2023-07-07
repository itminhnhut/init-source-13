import { FC } from 'react'

import Image from 'next/image'

import Link from 'next/link'

type BlogThumbnailProps = {
    featureImage: string
    title: string
    slug: string
}

const BlogThumbnail: FC<BlogThumbnailProps> = ({ featureImage, title, slug }) => {
    return (
        <Link href={`/blogs/${slug}`} passHref className="inline-block w-full">
            <div className="relative h-full rounded-[20px] bg-black-1 p-4 transition hover:bg-black-1 mb:bg-transparent">
                <div className="space-y-2">
                    <Image
                        src={featureImage}
                        className="!mb:h-[205px] !static !h-[185px]  rounded-lg object-cover"
                        fill
                        alt="blog-image"
                    />
                    <div className="font-medium">{title}</div>
                </div>
            </div>
        </Link>
    )
}

export default BlogThumbnail
