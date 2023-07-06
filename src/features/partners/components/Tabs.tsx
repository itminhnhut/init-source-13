import { useState } from 'react'
import Image from 'next/image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import classNames from 'classnames'

// ** Types
import LANGUAGE from '@/types/language'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { getOutScreenVariants } from '@/constants/motion-variants'

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
}

const TAB_PANEL_1: Array<TabPanelT> = [
    {
        src: '/images/partners/strategic/logo_coin98.png',
    },
    {
        src: '/images/partners/strategic/logo_fizen.png',
    },
    {
        src: '/images/partners/strategic/logo_oxalus.png',
    },
]

const TAB_PANEL_2: Array<TabPanelT> = [
    {
        src: '/images/partners/media/logo_68.png',
    },
    {
        src: '/images/partners/media/logo_vic.png',
    },
    {
        src: '/images/partners/media/log_blckchn.png',
    },
]

const TabsAbout = () => {
    const { t,
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
        <motion.main initial="hidden" animate="show" className="main text-white">
            <motion.h1
                variants={getOutScreenVariants('top', {
                    hidden: {
                        y: -300,
                    },
                })}
                className="mt-[42.5px] text-center text-4xl4 font-semibold lg:mt-32 lg:text-6xl4"
            >
                {t('common:partner')}
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
                                                width={0}
                                                height={0}
                                                sizes="(max-width: 768px) 30vw, (max-width: 1200px) 40vw, 100vw"
                                                alt="partners"
                                                className="h-auto w-auto cursor-pointer opacity-50 hover:opacity-100"
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
                                        width={0}
                                        height={0}
                                        sizes="(max-width: 768px) 30vw, (max-width: 1200px) 40vw, 33vw"
                                        alt="media"
                                        className="h-auto w-auto cursor-pointer opacity-50 hover:opacity-100"
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
