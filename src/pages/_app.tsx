import { useEffect } from 'react'

import { appWithTranslation } from 'next-i18next'
import Layout from '@/components/Layout'

import { useRouter } from 'next/router'
import NProgress from 'nprogress'

import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()

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
    }, [])

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default appWithTranslation(App)
