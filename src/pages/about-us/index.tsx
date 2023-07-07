import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

const TabsAbout = dynamic(() => import('@/features/about/components/Tabs'), { ssr: false })

const About = () => {
    return <TabsAbout />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common', 'about'])),
        },
    }
}

export default About
