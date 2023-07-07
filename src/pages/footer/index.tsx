import { useState } from 'react'

import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Button from '@/components/Elements/Button'
import IconButton from '@/components/Elements/Button/IconButton'
import Facebook from '@/components/Icons/Facebook'
import In from '@/components/Icons/LinkedIn'
import Twitter from '@/components/Icons/Twitter'
import FormRegister from '@/features/form-register/FormRegister'

const Footer = () => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggle = () => setIsOpen((prev) => !prev)
    return (
        <main className="main mt-[106px] lg:mt-[121px]">
            <section className="w-full px-3 text-center text-4xl4 font-semibold lg:w-[807px]  lg:px-0 lg:text-5xl">
                <h1>{t('footer:title')}</h1>
                <h2 className="font-medium">{t('footer:subTitle')}</h2>
                <section className="mt-10 flex justify-center">
                    <Button
                        onClick={toggle}
                        className="btn-gradient relative flex cursor-pointer flex-row px-[42px] py-6 text-lg font-semibold"
                    >
                        {t('common:button.start')}
                    </Button>
                </section>
                <section className="mt-10 flex flex-col gap-1 text-base lg:mt-[89px]">
                    <div className="font-light">{t('footer:contact')}</div>
                    <div className="font-medium">{t('footer:contact_us')}</div>
                    <div className="font-light">{t('footer:contact_sub')}</div>
                </section>
                <section className="mt-10 flex flex-row justify-center gap-x-2 lg:mt-6">
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
            <FormRegister isOpen={isOpen} onClose={toggle} />
        </main>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common', 'footer', 'form', 'validation'])),
        },
    }
}

export default Footer
