import { GetStaticProps } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { getOutScreenVariants, transitionProps } from '@/constants/motion-variants'

const TAB_PANEL_1 = [
    {
        src: '/images/portfolio/logo_insurance.png',
    },
    {
        src: '/images/portfolio/logo.png',
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
                <Image key="title-portfolio" className='w-auto h-auto' sizes="(max-width: 768px) 80vw, (max-width: 1200px) 60vw, 100vw" src="/images/portfolio/portfolio.png" width={0} height={0} alt="title portfolio" />
            </motion.div>
            <article>
                <motion.section
                    variants={getOutScreenVariants('bottom')}
                    initial="hidden"
                    animate="show"
                    className="mt-[82px] flex flex-row justify-center gap-x-10 gap-y-8 flex-wrap lg:flex-nowrap"
                >
                    {TAB_PANEL_1?.map((item: { src: string }, key: number) => {
                        return (
                            <Image
                                key={`partners_${key}`}
                                src={item.src}
                                width="0"
                                height="0"
                                sizes="(max-width: 768px) 30vw, (max-width: 1200px) 40vw, 100vw"
                                alt="partners"
                                className="cursor-pointer opacity-50 hover:opacity-100 w-auto h-auto"
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
