import { useState } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import classNames from 'classnames'

const dataTabs = [
    {
        title: 'Our Story',
    },
    {
        title: 'Mission',
    },
    {
        title: 'Vision',
    },
]

const TAB_PANEL_1 = [
    {
        title: '25+',
        subTitle: 'Countries',
    },
    {
        title: '200+',
        subTitle: 'Projects',
    },
    {
        title: '5+',
        subTitle: 'Continents',
    },
    {
        title: '3+',
        subTitle: 'Year',
    },
]

const TabsAbout = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const handleChangTab = (key: number) => setTabIndex(key)

    const renderTab = () => {
        return dataTabs?.map((item: any, key: number) => {
            return (
                <Tab
                    className={classNames('text-white', {
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
        <main className="relative z-10 flex flex-col items-center text-white">
            <h1 className="mt-32 text-center text-[64px] font-semibold">About Us</h1>
            <section className="w-[806px]">
                <Tabs defaultIndex={tabIndex}>
                    <TabList className="mb-6 flex cursor-pointer flex-row justify-center gap-x-6 text-lg font-medium">
                        {renderTab()}
                    </TabList>

                    <TabPanel>
                        <article>
                            <h2 className="w-full text-center font-light leading-6">
                                Binance Labs identifies, invests, and empowers viable blockchain entrepreneurs,
                                startups, and communities, providing financing to industry projects that help grow the
                                wider blockchain ecosystem. Binance Labs is committed to supporting fast-executing,
                                technical teams who positively impact the crypto space and build the decentralised web.
                            </h2>
                            <section className="mt-[30px] flex flex-row justify-center gap-x-10">
                                {TAB_PANEL_1?.map((item: { title: string; subTitle: string }) => {
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
                        </article>
                    </TabPanel>
                    <TabPanel>
                        <article>
                            <h2 className="w-full text-center font-light leading-6">
                                Binance Labs identifies, invests, and empowers viable blockchain entrepreneurs,
                                startups, and communities, providing financing to industry projects that help grow the
                                wider blockchain ecosystem. Binance Labs is committed to supporting fast-executing,
                                technical teams who positively impact the crypto space and build the decentralised web.
                            </h2>
                            <section className="mt-[30px] flex flex-row justify-center gap-x-10">
                                {TAB_PANEL_1?.map((item: { title: string; subTitle: string }) => {
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
                        </article>
                    </TabPanel>
                    <TabPanel>
                        <article>
                            <h2 className="w-full text-center font-light leading-6">
                                Binance Labs identifies, invests, and empowers viable blockchain entrepreneurs,
                                startups, and communities, providing financing to industry projects that help grow the
                                wider blockchain ecosystem. Binance Labs is committed to supporting fast-executing,
                                technical teams who positively impact the crypto space and build the decentralised web.
                            </h2>
                            <section className="mt-[30px] flex flex-row justify-center gap-x-10">
                                {TAB_PANEL_1?.map((item: { title: string; subTitle: string }) => {
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
                        </article>
                    </TabPanel>
                </Tabs>
            </section>
        </main>
    )
}
export default TabsAbout
