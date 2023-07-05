import { useState } from 'react'

import { GetStaticProps } from 'next'

import dynamic from 'next/dynamic'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { motion } from 'framer-motion'


const Button = dynamic(() => import('@/components/Elements/Button'), { ssr: false })

const FormRegister = dynamic(() => import('@/features/form-register/FormRegister'), { ssr: false })

const wrapperVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 1,
            delayChildren: 0.3,
            staggerChildren: 0.1,
            staggerDirection: -1,
        },
    },
}

const titleVariants = {
    hidden: {
        opacity: 0,
        y: -300,
    },
    show: {
        opacity: 1,
        y: 0,

        transition: {
            ease: [0.075, 0.82, 0.165, 1],
            duration: 1.2,
        },
    },
}

const subTitleVariant = {
    hidden: {
        opacity: 0,
        y: -300,
        x: -100,
    },
    show: {
        opacity: 1,
        y: 0,
        x: [50, 0],
        transition: {
            ease: [0.075, 0.82, 0.165, 1],
            duration: 1,
        },
    },
}

export default function Home() {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState<boolean>(false)


    const toggle = () => setIsOpen((prev) => !prev)
    return (
        <main className="main">
            <section className="w-full px-4 pt-[149px] text-center text-white lg:mx-0 lg:w-[600px] lg:pt-[129px]">
                <motion.div variants={wrapperVariants} initial="hidden" animate="show">
                    <motion.h1 variants={titleVariants} className="text-4xl4 font-semibold lg:text-6xl4">
                        {t('home:title')}
                    </motion.h1>
                    <motion.div variants={subTitleVariant}>
                        <p className="mt-4 text-lg opacity-60">{t('home:subTitle')}</p>
                        <div className="mt-[33px] flex justify-center">
                            <Button
                                onClick={toggle}
                                className="btn-gradient relative flex cursor-pointer flex-row px-[42px] py-6 text-lg font-semibold"
                            >
                                {t('common:button.apply')}
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
                <FormRegister isOpen={isOpen} onClose={toggle} />
            </section>
        </main >
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common', 'home', 'form', 'validation'])),
        },
    }
}
