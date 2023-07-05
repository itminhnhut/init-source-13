import { useState } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import classNames from 'classnames'

// ** Types
import LANGUAGE from '@/types/language'
import { useTranslation } from 'next-i18next'
import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getOutScreenVariants } from '@/constants/motion-variants'
const dataTabs = [
    {
        title: { vi: 'Câu chuyện', en: 'Our Story' },
    },
    {
        title: { vi: 'Mission', en: 'Mission' },
    },
    {
        title: { vi: 'Vision', en: 'Vision' },
    },
]

const TAB_PANEL_1 = [
    {
        title: '25+',
        subTitle: { vi: 'Khối lượng giao dịch', en: 'Volume' },
    },
    {
        title: '200+',
        subTitle: { vi: 'Dự án', en: 'Projects' },
    },
    {
        title: '5+',
        subTitle: { vi: 'Số lượng người dùng', en: 'Unique Wallet/Unique User' },
    },
    {
        title: '3+',
        subTitle: { vi: 'Giao dịch', en: 'Transaction' },
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
                    className={classNames('text-base font-medium text-white lg:text-lg', {
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
        <WrapperMain className="main text-white">
            <motion.div
                variants={getOutScreenVariants('top', {
                    show: {
                        y: '-50%',
                    },
                })}
                initial="hidden"
                animate="show"
                className="fixed left-[112px] top-1/2 -translate-y-1/2"
            >
                <div className=" -rotate-180 text-5xl font-semibold uppercase opacity-10 [writing-mode:vertical-lr]">
                    Our Story
                </div>
            </motion.div>
            <motion.h1
                variants={getOutScreenVariants('top', {
                    hidden: {
                        y:-200,
                        scale: 1.5,
                    },
                    show: {
                        scale: 1,
                    },
                })}
                initial="hidden"
                animate="show"
                className="mt-[108px] text-center text-4xl4 font-semibold lg:mt-[108px] lg:text-6xl4"
            >
                About Us
            </motion.h1>
            <section className="mt-[47px] w-full lg:w-[806px]">
                <Tabs defaultIndex={tabIndex} className="mx-4 lg:mx-0">
                    <TabList className="mb-6 flex cursor-pointer flex-row justify-center gap-x-6 text-lg font-medium">
                        {renderTab()}
                    </TabList>
                    <TabPanel>
                        <article>
                            <h2 className="w-full text-center text-base font-light">{t('about:our_story_tile')}</h2>
                            <section className="mt-[78px] flex flex-row flex-wrap justify-center gap-10">
                                {TAB_PANEL_1?.map((item: { title: string; subTitle: LANGUAGE }) => {
                                    return (
                                        <section className="cursor-pointer" key={`Our_Story_${item.title}`}>
                                            <section className="text-gradient-1 text-3xl2 font-medium">
                                                {item.title}
                                            </section>
                                            <section className="font-medium">
                                                {item.subTitle?.[language as keyof LANGUAGE]}
                                            </section>
                                        </section>
                                    )
                                })}
                            </section>
                        </article>
                    </TabPanel>
                    <TabPanel>
                        <article>
                            <h2 className="w-full text-center text-base font-light">{t('about:mission_tile')}</h2>
                        </article>
                    </TabPanel>
                    <TabPanel>
                        <Tabs>
                            <h2 className="w-full text-center text-base font-light">{t('about:vision_title')}</h2>
                        </Tabs>
                    </TabPanel>
                </Tabs>
            </section>
        </WrapperMain>
    )
}

const WrapperMain = styled.main`
    background-image: url('/images/about/bg_face.png');
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: contain;
    min-width: 100%;
    min-height: 100%;
    position: fixed;
`

export default TabsAbout
