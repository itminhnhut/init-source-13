import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import Image from 'next/image'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { motion } from 'framer-motion'
import { transitionProps } from '@/constants/motion-variants'

export default function Home() {
    const router = useRouter()
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
                            delay: 0.3,
                            ...transitionProps,
                        },
                    },
                }}
                animate="show"
                onAnimationComplete={() => {
                    router.push('/home')
                }}
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
