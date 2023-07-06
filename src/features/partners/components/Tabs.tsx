import { useState } from 'react'
import Image from 'next/image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import classNames from 'classnames'

// ** Types
import LANGUAGE from '@/types/language'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { defaultVariants, getOutScreenVariants } from '@/constants/motion-variants'
import { useRouter } from 'next/router'

const dataTabs = [
    {
        title: { vi: 'Chiến lược', en: 'Strategic' },
    },
    {
        title: { vi: 'Truyền thông', en: 'Media' },
    },
]

type TabPanelT = {
    src: string
    width: number
    height: number
}

const TAB_PANEL_1: Array<TabPanelT> = [
    {
        src: '/images/partners/strategic/logo_coin98.png',
        width: 310,
        height: 80,
    },
    {
        src: '/images/partners/strategic/logo_fizen.png',
        width: 254,
        height: 80,
    },
    {
        src: '/images/partners/strategic/logo_oxalus.png',
        width: 226,
        height: 80,
    },
]

const TAB_PANEL_2: Array<TabPanelT> = [
    {
        src: '/images/partners/media/logo_68.png',
        width: 156,
        height: 80,
    },
    {
        src: '/images/partners/media/logo_vic.png',
        width: 226,
        height: 80,
    },
    {
        src: '/images/partners/media/log_blckchn.png',
        width: 260,
        height: 80,
    },
]

const TabsAbout = () => {
    const {
        t,
        i18n: { language },
    } = useTranslation()
    const [tabIndex, setTabIndex] = useState(0)
    const router = useRouter()

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
        <motion.main initial="hidden" animate="show" className="main text-white">
            <motion.h1
                variants={getOutScreenVariants('top', {
                    hidden: {
                        y: -300,
                    },
                })}
                className="mt-[42.5px] text-center text-4xl4 font-semibold lg:mt-32 lg:text-6xl4"
            >
                Partners
            </motion.h1>
            <section className="mt-9 w-full px-4 lg:px-[110px]">
                <Tabs defaultIndex={tabIndex}>
                    <motion.div
                        variants={getOutScreenVariants('top', {
                            hidden: {
                                y: -100,
                            },
                        })}
                    >
                        <TabList className="mb-6 flex cursor-pointer flex-row justify-center gap-x-6 text-lg font-medium">
                            {renderTab()}
                        </TabList>
                    </motion.div>
                    <motion.div variants={getOutScreenVariants('bottom')}>
                        <TabPanel>
                            <article>
                                <section className="mt-[75px] flex flex-row flex-wrap justify-center gap-x-10 gap-y-8">
                                    {TAB_PANEL_1?.map((item, key: number) => {
                                        return (
                                            <Image
                                                key={`strategic_${key}`}
                                                src={item.src}
                                                width={item.width}
                                                height={item.height}
                                                alt="partners"
                                                className="cursor-pointer opacity-50 hover:opacity-100"
                                            />
                                        )
                                    })}
                                </section>
                            </article>
                        </TabPanel>
                    </motion.div>
                    <TabPanel>
                        <section className="mt-[75px] flex flex-row flex-wrap justify-center gap-x-10 gap-y-8">
                            {TAB_PANEL_2?.map((item, key: number) => {
                                return (
                                    <Image
                                        key={`media_${key}`}
                                        src={item.src}
                                        width={item.width}
                                        height={item.height}
                                        alt="partners"
                                        className="cursor-pointer opacity-50 hover:opacity-100"
                                    />
                                )
                            })}
                        </section>
                    </TabPanel>
                </Tabs>
            </section>
        </motion.main>
    )
}
export default TabsAbout
