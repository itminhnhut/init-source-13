import { useState } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import classNames from 'classnames'
import Image from 'next/image'

const dataTabs = [
    {
        title: 'Strategic',
    },
    {
        title: 'Media',
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
    const [tabIndex, setTabIndex] = useState(0)

    const handleChangTab = (key: number) => setTabIndex(key)

    const renderTab = () => {
        return dataTabs?.map((item: any, key: number) => {
            return (
                <Tab
                    className={classNames('text-lg text-white', {
                        'text-gradient-1': key === tabIndex,
                    })}
                    key={`tab_${item.title}`}
                    onClick={() => handleChangTab(key)}
                >
                    {item.title}
                </Tab>
            )
        })
    }

    return (
        <main className="main text-white">
            <h1 className="mt-[42.5px] lg:mt-32 text-center text-4xl4 lg:text-6xl4 font-semibold ">Partners</h1>
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
