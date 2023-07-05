import { useState } from 'react'
import Image from 'next/image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import classNames from 'classnames'

// ** Types
import LANGUAGE from '@/types/language'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { getOutScreenVariants } from '@/constants/motion-variants'
import { transitionProps } from '../../../constants/motion-variants'

const dataTabs = [
    {
        title: { vi: 'Chiến lược', en: 'Strategic' },
    },
    {
        title: { vi: 'Truyền thông', en: 'Media' },
    },
]

const TAB_PANEL_1 = [
    {
        src: '/images/partners/ic_partner.png',
    },
    {
        src: '/images/partners/ic_partner.png',
    },
    {
        src: '/images/partners/ic_partner.png',
    },
    {
        src: '/images/partners/ic_partner.png',
    },
    {
        src: '/images/partners/ic_partner.png',
    },
    {
        src: '/images/partners/ic_partner.png',
    },
    {
        src: '/images/partners/ic_partner.png',
    },
    {
        src: '/images/partners/ic_partner.png',
    },
    {
        src: '/images/partners/ic_partner.png',
    },
    {
        src: '/images/partners/ic_partner.png',
    },
    {
        src: '/images/partners/ic_partner.png',
    },
    {
        src: '/images/partners/ic_partner.png',
    },
]

const TabsAbout = () => {
    const {
        t,
        i18n: { language },
    } = useTranslation()
    const [tabIndex, setTabIndex] = useState(0)

    const handleChangTab = (key: number) => setTabIndex(key)

    const renderTab = () => {
        return dataTabs?.map((item: any, key: number) => {
            return (
                <Tab
                    className={classNames('text-lg text-white', {
                        'text-gradient-1': key === tabIndex,
                    })}
                    key={`tab_${item.title?.[language as keyof LANGUAGE]}`}
                    onClick={() => handleChangTab(key)}
                >
                    {item.title?.[language as keyof LANGUAGE]}
                </Tab>
            )
        })
    }

    return (
        <main className="main text-white">
            <h1 className="mt-[42.5px] text-center text-4xl4 font-semibold lg:mt-32 lg:text-6xl4">Partners</h1>
            <section className="mt-9 w-full px-4 lg:px-[110px]">
                <Tabs defaultIndex={tabIndex}>
                    <TabList className="mb-6 flex cursor-pointer flex-row justify-center gap-x-6 text-lg font-medium">
                        {renderTab()}
                    </TabList>
                    <TabPanel>
                        <article>
                            <section className="mt-[30px] flex flex-row flex-wrap justify-center gap-x-10 gap-y-8">
                                {TAB_PANEL_1?.map((item: { src: string }, key: number) => {
                                    return (
                                        <Image
                                            key={`partners_${key}`}
                                            src={item.src}
                                            width={170}
                                            height={60}
                                            alt="partners"
                                            className="cursor-pointer opacity-50 hover:opacity-100"
                                        />
                                    )
                                })}
                            </section>
                        </article>
                    </TabPanel>
                    <TabPanel>
                        {/* <article>
                            <section className="mt-[30px] flex flex-row justify-center gap-x-10">
                                {TAB_PANEL_1?.map((item: { src: string }) => {
                                    return (
                                        <section className="cursor-pointer" key={`Our_Story_${item.subTitle}`}>
                                            <section className="text-gradient-1 text-[32px] font-medium">
                                                {item.title}
                                            </section>
                                            <section className="font-medium">{item.subTitle}</section>
                                        </section>
                                    )
                                })}
                            </section>
                        </article> */}
                    </TabPanel>
                </Tabs>
            </section>
        </main>
    )
}
export default TabsAbout
