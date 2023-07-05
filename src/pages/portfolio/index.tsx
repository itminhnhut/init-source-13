import { GetStaticProps } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { getOutScreenVariants, transitionProps } from '@/constants/motion-variants'

const TAB_PANEL_1 = [
    {
        src: '/images/portfolio/ic_portfolio.png',
    },
    {
        src: '/images/portfolio/ic_portfolio.png',
    },
    {
        src: '/images/portfolio/ic_portfolio.png',
    },
]

const Portfolio = () => {
    return (
        <main className="main mt-[128px]">
            <motion.div
                variants={{
                    hidden: {
                        scale: 0.8,
                        y: -200,
                    },
                    show: {
                        scale: 1,
                        y: 0,
                        transition: {
                            ...transitionProps,
                        },
                    },
                }}
                initial="hidden"
                animate="show"
            >
                <Image src="/images/portfolio/ic_title.png" width={686} height={100} alt="title portfolio" />
            </motion.div>
            <article>
                <motion.section
                    variants={getOutScreenVariants('bottom')}
                    initial="hidden"
                    animate="show"
                    className="mt-[30px] flex flex-row flex-wrap justify-center gap-x-10 gap-y-8"
                >
                    {TAB_PANEL_1?.map((item: { src: string }, key: number) => {
                        return (
                            <Image
                                key={`partners_${key}`}
                                src={item.src}
                                width={170}
                                height={60}
                                alt="partners"
                                className="cursor-pointer opacity-50 hover:opacity-100"
                            />
                        )
                    })}
                </motion.section>
            </article>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common', 'home'])),
        },
    }
}

export default Portfolio
