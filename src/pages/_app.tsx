import { ReactElement, ReactNode, useEffect, useState } from 'react'

import { appWithTranslation } from 'next-i18next'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Manrope } from 'next/font/google'

import { BreadcrumbJsonLd, NextSEO } from '@/features/SEO'

import dynamic from 'next/dynamic'


const Layout = dynamic(() => import('@/components/Layout'), { ssr: false })

import { BREAD_CRUMB_JSON_LD } from '@/constants'

import NProgress from 'nprogress'

import '@/styles/globals.scss'
import 'nprogress/nprogress.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { NextPage } from 'next'

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

const ReactPortal = dynamic(() => import('@/components/Elements/Portal'), { ssr: false })


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
            {Component.notGetLayout ? (
                <Component {...pageProps} />
            ) : (
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            )}
            {loading && <ReactPortal wrapperId="loading" className='' />}
        </>
    )
}

export default appWithTranslation(App)
