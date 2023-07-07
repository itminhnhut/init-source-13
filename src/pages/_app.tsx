import { useEffect, useState } from 'react'

import type { AppProps } from 'next/app'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { NextPage } from 'next'
import { appWithTranslation } from 'next-i18next'

import { BREAD_CRUMB_JSON_LD } from '@/constants'
import { BreadcrumbJsonLd, NextSEO } from '@/features/SEO'

import { AnimatePresence, motion } from 'framer-motion'
import { Manrope } from 'next/font/google'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import '@/styles/globals.scss'

const Layout = dynamic(() => import('@/components/Layout'), { ssr: false })

NProgress.configure({ showSpinner: false })

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    notGetLayout?: boolean
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const router = useRouter()

    const [loading, setLoading] = useState<boolean>(false)

    const { locale, pathname } = router
    useEffect(() => {
        const handleRouteStart = () => setLoading((prev) => !prev)
        const handleRouteDone = () => setLoading((prev) => !prev)

        router.events.on('routeChangeStart', handleRouteStart)
        router.events.on('routeChangeComplete', handleRouteDone)
        router.events.on('routeChangeError', handleRouteDone)

        return () => {
            // Make sure to remove the event handler on unmount!
            router.events.off('routeChangeStart', handleRouteStart)
            router.events.off('routeChangeComplete', handleRouteDone)
            router.events.off('routeChangeError', handleRouteDone)
        }
    }, [router.events])

    return (
        <>
            <NextSEO pathname={pathname} locale={locale} />
            <BreadcrumbJsonLd data={BREAD_CRUMB_JSON_LD} />
            <style jsx global>{`
                :root {
                    --manrope-font: ${manrope.style.fontFamily};
                }
            `}</style>
            <AnimatePresence mode="wait">
                {loading && (
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                            },
                            show: {
                                opacity: 1,
                            },
                        }}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="fixed z-[9999999999] h-full w-full bg-black"
                    />
                )}
            </AnimatePresence>
            {Component.notGetLayout ? (
                <Component {...pageProps} />
            ) : (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
        </>
    )
}

export default appWithTranslation(App)
