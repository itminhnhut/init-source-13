import { GetStaticProps } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { getOutScreenVariants, transitionProps } from '@/constants/motion-variants'

const TAB_PANEL_1 = [
    {
        src: '/images/portfolio/logo_insurance.png',
        width: 289,
        height: 80
    },
    {
        src: '/images/portfolio/logo.png',
        width: 341,
        height: 80
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
                <Image src="/images/portfolio/portfolio.png" width={686} height={100} alt="title portfolio" />
            </motion.div>
            <article>
                <motion.section
                    variants={getOutScreenVariants('bottom')}
                    initial="hidden"
                    animate="show"
                    className="mt-[82px] flex flex-row flex-wrap justify-center gap-x-10 gap-y-8"
                >
                    {TAB_PANEL_1?.map((item: { src: string, width: number, height: number }, key: number) => {
                        return (
                            <Image
                                key={`partners_${key}`}
                                src={item.src}
                                width={item.width}
                                height={item.height}
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
