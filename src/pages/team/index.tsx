import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import dynamic from 'next/dynamic'

const TeamSlider = dynamic(() => import('@/features/Team/TeamSlider'), { ssr: false })

export default function Team() {
    return (
        <main className={`flex h-screen flex-col justify-center items-center w-full `}>
            <TeamSlider />
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
