import { useState } from 'react'

import { GetStaticProps } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import dynamic from 'next/dynamic'

const Button = dynamic(() => import('@/components/Elements/Button'), { ssr: false })
const Modal = dynamic(() => import('@/components/Elements/Modal'), { ssr: false })
const InputField = dynamic(() => import('@/components/Form/InputField'), { ssr: false })
const TextAreaField = dynamic(() => import('@/components/Form/TextAreaField'), { ssr: false })

import { Montserrat } from 'next/font/google'
import { motion } from 'framer-motion'

const montserrat = Montserrat({
    subsets: ['latin'],
})

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

const subTitleVarians = {
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
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                type: 'spring',
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.3,
                                staggerChildren: 0.1,
                                staggerDirection: -1,
                            },
                        },
                    }}
                    initial="hidden"
                    animate="show"
                >
                    <motion.h1 variants={titleVariants} className="text-4xl4 font-semibold lg:text-6xl4">
                        {t('home:title')}
                    </motion.h1>
                    <motion.div variants={subTitleVarians}>
                        <p className="mt-4 text-lg opacity-60">{t('home:subTitle')}</p>
                        <div className="mt-[33px] flex justify-center">
                            <Button
                                onClick={toggle}
                                className="relative flex cursor-pointer flex-row px-[42px] py-6 text-lg font-semibold btn-gradient"
                            >
                                {t('common:button.apply')}
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
                <Modal isOpen={isOpen} onClose={toggle}>
                    {/* <div className="text-center">
                        <div className="text-lg font-semibold">Thank you!</div>
                        <div className=" mb-6 text-gray-2">Description</div>
                        <div className="flex justify-center">
                            <Image src="/images/Modal/check_success.png" width={332} height={332} alt="check_success" />
                        </div>
                    </div> */}
                    <div>
                        <h1 className={`${montserrat.className} mt-2 text-center text-[20px] font-semibold leading-6`}>
                            Your Information
                        </h1>
                        <h2 className="mt-1 text-center opacity-50">Description</h2>
                        <form className="mt-[22px]">
                            <InputField label="Your Name" />
                            <InputField className="mt-4" label="Your Email" isRequired />
                            <TextAreaField className="mt-4 " label="Your Description" rows={3} />
                            <Button iconType="send" className="mt-6 flex w-full justify-center rounded-[10px] !py-3">
                                Send
                            </Button>
                        </form>
                    </div>
                </Modal>
            </section>
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