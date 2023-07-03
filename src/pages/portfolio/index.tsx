import { GetStaticProps } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Image from 'next/image'


const TAB_PANEL_1 = [
    {
        src: '/images/portfolio/ic_portfolio.png',
    },
    {
        src: '/images/portfolio/ic_portfolio.png',
    },
    {
        src: '/images/portfolio/ic_portfolio.png',
    },
]

const Portfolio = () => {
    return <main className="main mt-[128px]">
        <Image src="/images/portfolio/ic_title.png" width={686} height={37} alt="title portfolio" />
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
        </article >
    </main >
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common', 'home'])),
        },
    }
}

export default Portfolio 