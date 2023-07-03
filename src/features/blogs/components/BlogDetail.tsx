import React from 'react'
import RelatedPosts from './RelatedPosts'
import Image from 'next/image'
import TeamSocials from '@/features/team/components/TeamSocials'

const BlogDetail = () => {
    return (
        <div className=" z-10 grid grid-cols-12 justify-between gap-8">
            <div className="col-span-8 ">
                <div className="mb-6">
                    <div className="mb-1 text-[32px] font-medium leading-[40px]">The Blockchain World Discovery</div>
                    <div className="">2023-06-12</div>
                </div>
                <div className="mb-[10px]">
                    <Image
                        src="/images/blog-image.png"
                        alt="img"
                        fill
                        className="!static !h-[auto] rounded-lg object-cover"
                        quality="100"
                    />
                </div>
                <div className="mb-8">
                    21st century. 2008. A cataclysm called the “Global Financial crisis” swept through the globe,
                    leaving a massive shock for the entire financial markets, especially the banking and real estate
                    industry. The crisis then eroded people’s trust in a centralized and bureaucratic financial system
                    with plenty of vulnerabilities. From this erosion of trust, there came the invention of the
                    blockchain, marking the beginning of a new era in the technological revolution. the venture capital
                    and incubation arm of Binance, has made an investment in the five best-performing projects of Season
                    5 of its Incubation Program. More than 900 projects applied for participation this season, with less
                    than 2% of them being admitted into the program. The curriculum was tailored to meet founder needs
                    and enhanced with exclusive ecosystem resources and fireside chats with market leaders. "Binance
                    Labs remains dedicated to empowering scalable early-stage projects that contribute to the
                    advancement of the industry. We look forward to seeing the positive impact of Season five’s
                    incubated projects on the broader Web3 ecosystem," said Yibo Ling, Chief Business Officer at
                    Binance. Throughout the incubation process, the Binance Labs team offered 1:1 coaching to help
                    incubation projects build viable products and conducted in-depth assessments to form a final
                    investment decision. The Season 5 cohort had the opportunity to make their pitches to an audience of
                    industry leaders and investors on Build The Block, the first-ever metaverse pitching competition
                    where five exceptional projects received funding from Binance Labs:
                </div>
                <div className="flex items-center gap-4">
                    <TeamSocials />
                </div>
            </div>
            <div className=" col-span-4">
                <RelatedPosts />
            </div>
        </div>
    )
}

export default BlogDetail
