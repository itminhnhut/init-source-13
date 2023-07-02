import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

const TabsAbout = dynamic(() => import('@/features/about/components/tabs'))

const About = () => {
    return (
        <TabsAbout />
    )
}
export default About
