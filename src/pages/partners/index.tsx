import dynamic from 'next/dynamic'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const TabsAbout = dynamic(() => import('@/features/partners/components/Tabs'), { ssr: false })

const partner = () => {
    return <TabsAbout />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    }
}

export default partner
