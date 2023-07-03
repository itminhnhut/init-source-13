import { useEffect } from 'react'

import { appWithTranslation } from 'next-i18next'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Lexend } from 'next/font/google'

import { BreadcrumbJsonLd, NextSEO } from '@/features/SEO';


import Layout from '@/components/layout'

import { BREAD_CRUMB_JSON_LD } from '@/constants'

import NProgress from 'nprogress'

import '@/styles/globals.css'
import 'nprogress/nprogress.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

NProgress.configure({ showSpinner: false })

const lexend = Lexend({
    subsets: ['latin'],
})

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()

    const { locale, pathname } = router
    useEffect(() => {
        const handleRouteStart = () => NProgress.start()
        const handleRouteDone = () => NProgress.done()

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
                html {
                font-family: ${lexend.style.fontFamily};
                }
            `}</style>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default appWithTranslation(App)
