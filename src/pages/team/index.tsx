import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import dynamic from 'next/dynamic'

const Team = dynamic(() => import('@/features/team'), { ssr: false })

export default function index() {
    return (
        <main className={`flex z-10 h-screen w-full flex-col items-center justify-center `}>
            <Team />
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
