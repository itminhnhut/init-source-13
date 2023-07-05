import { GetStaticProps } from 'next'

import Image from 'next/image'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { motion } from 'framer-motion'
import { transitionProps } from '../constants/motion-variants'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
    const { t } = useTranslation()
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => router.push('/home'), 1000)
    }, [router])

    return (
        <main className={`flex min-h-screen flex-col items-center justify-center bg-black p-24 `}>
            <motion.div
                variants={{
                    hidden: {
                        rotate: 0,
                    },
                    show: {
                        rotate: -180,
                        transition: {
                            ...transitionProps,
                        },
                    },
                }}
                initial="hidden"
                animate="show"
                className=""
            >
                <Image src="/images/intro-circle.png" className="" width={157} height={157} alt="intro-circle" />
            </motion.div>
        </main>
    )
}

Home.notGetLayout = true
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common', 'home'])),
        },
    }
}
