import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Team() {
    return (
        <main className={`flex min-h-screen flex-col items-center `}>{/* <section className="pt-[129px] text-white w-[600px] text-center"></section> */}</main>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common', 'home'])),
        },
    }
}
