import { useState } from 'react'

import Button from '@/components/Elements/Button'
import IconButton from '@/components/Elements/Button/IconButton'
import In from '@/components/Icons/In'
import Facebook from '@/components/Icons/Facebook'
import Twitter from '@/components/Icons/Twitter'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Footer = () => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggle = () => setIsOpen((prev) => !prev)
    return (
        <main className='main mt-[106px] lg:mt-[121px]'>
            <section className='text-center text-4xl4 lg:text-5xl font-semibold px-3 lg:px-0  w-full lg:w-[807px]'>
                <h1>{t('footer:title')}</h1>
                <h2 className='font-medium'>{t('footer:subTitle')}</h2>
                <section className='mt-10 flex justify-center'>
                    <Button onClick={toggle}
                        className="relative flex cursor-pointer flex-row px-[42px] py-6 text-lg font-semibold btn-gradient">
                        {t('common:button.start')}
                    </Button>
                </section>
                <section className='text-base flex flex-col gap-1 mt-10 lg:mt-[89px]'>
                    <div className='font-light'>{t('footer:contact')}</div>
                    <div className='font-medium'>{t('footer:contact_us')}</div>
                    <div className='font-light'>{t('footer:contact_sub')}</div>
                </section>
                <section className='flex flex-row justify-center gap-x-2 mt-10 lg:mt-6'>
                    <IconButton className="border-0 !bg-[#d9d9d926]" rounded>
                        <In size={24} color="white" />
                    </IconButton>
                    <IconButton className="border-0 !bg-[#d9d9d926]" rounded>
                        <Facebook size={24} color="white" />
                    </IconButton>
                    <IconButton className="border-0 !bg-[#d9d9d926]" rounded>
                        <Twitter size={24} color="white" />
                    </IconButton>
                </section>
            </section>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common', 'footer'])),
        },
    }
}


export default Footer
