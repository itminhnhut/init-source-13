import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

const TabsAbout = dynamic(() => import('@/features/partners/components/tabs'))

const partner = () => {
    return (
        <>
            <NextSeo title="partner" />
            <TabsAbout />
        </>
    )
}
export default partner
