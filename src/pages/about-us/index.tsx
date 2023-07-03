import { GetStaticProps } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import dynamic from 'next/dynamic'

const TabsAbout = dynamic(() => import('@/features/about/components/tabs'))

const About = () => {
    return (
        <TabsAbout />
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common', 'home'])),
        },
    }
}


export default About
