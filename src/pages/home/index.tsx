import { GetStaticProps } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import dynamic from 'next/dynamic'

const Button = dynamic(() => import('@/components/Button'), { ssr: false })
const Modal = dynamic(() => import('@/components/Modal'), { ssr: false })
const InputField = dynamic(() => import('@/components/InputField'), { ssr: false })

import { Montserrat } from 'next/font/google'
import { useState } from 'react'
import { motion } from 'framer-motion'

const montserrat = Montserrat({
    subsets: ['latin'],
})

export default function Home() {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggle = () => setIsOpen((prev) => !prev)

    return (
        <main className="flex min-h-screen flex-col items-center relative z-0">
            <section className="pt-[129px] text-white w-[600px] text-center">
                <motion.h1
                    initial={{
                        y: '-300px',
                        opacity: 0,
                    }}
                    animate={{
                        y: '0',
                        opacity: 1,
                    }}
                    className="text-[64px] font-semibold"
                >
                    Empowering the decentralised Web
                </motion.h1>
                <motion.p
                    initial={{
                        y: '-350px',
                        opacity: 0,
                    }}
                    animate={{
                        y: '0',
                        opacity: 1,
                    }}
                    className="text-lg mt-4"
                >
                    SCI Labs invests in technical teams that build and support the decentralised web.
                </motion.p>
                <motion.div
                    initial={{
                        y: '300px',
                        opacity: 0,
                    }}
                    animate={{
                        y: '0',
                        opacity: 1,
                    }}
                    className="flex justify-center mt-[82px]"
                >
                    <Button>Apply Now</Button>
                </motion.div>
                <Modal isOpen={isOpen} onClose={toggle}>
                    <h1 className={`${montserrat.className} text-[20px] font-semibold leading-6 text-center mt-2`}>Your Information</h1>
                    <h2 className="mt-1 text-center opacity-50">Description</h2>
                    <form className="mt-[22px]">
                        <InputField label="Your Name" />
                        <InputField className="mt-4" label="Your Email" />
                    </form>
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
