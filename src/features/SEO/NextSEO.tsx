import { runEnv } from '@/configs/ENV'
import DEFAULT_SEO from '@/configs/SEO'
import { NextSeo } from 'next-seo'
import { useMemo } from 'react'

const { NEXT_PUBLIC_APP_URL } = runEnv

type NextSeoProps = {
    pathname: string
    locale: string | any
}

const NextSEO = ({ pathname, locale }: NextSeoProps) => {
    const SEO = useMemo(() => {
        const getData = DEFAULT_SEO?.[pathname]
        const title = getData?.title?.[locale]
        const des = getData?.des?.[locale]
        const canonical = NEXT_PUBLIC_APP_URL + pathname

        return { title, des, canonical }
    }, [pathname, locale])

    return (
        <NextSeo
            title={SEO.title}
            description={SEO.des}
            canonical={SEO.canonical}
            openGraph={{
                url: 'https://www.url.ie/a',
                title: 'Open Graph Title',
                description: 'Open Graph Description',
                images: [
                    {
                        url: 'https://www.example.ie/og-image-01.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Og Image Alt',
                        type: 'image/jpeg',
                    },
                    {
                        url: 'https://www.example.ie/og-image-02.jpg',
                        width: 900,
                        height: 800,
                        alt: 'Og Image Alt Second',
                        type: 'image/jpeg',
                    },
                ],
                siteName: 'SiteName',
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />
    )
}

export default NextSEO
