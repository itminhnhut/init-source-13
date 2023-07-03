import { useState } from 'react'

import Button from '@/components/Elements/Button'
import IconButton from '@/components/Elements/Button/IconButton'
import In from '@/components/Icons/In'
import Facebook from '@/components/Icons/Facebook'
import Twitter from '@/components/Icons/Twitter'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Footer = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggle = () => setIsOpen((prev) => !prev)
    return (
        <main className='main mt-[121px]'>
            <section className='text-center text-5xl font-semibold'>
                <h1>Apply to Sci labs</h1>
                <h2>Calling founders and Buidlers!</h2>
                <section className='mt-10 flex justify-center'>
                    <Button onClick={toggle}
                        iconType="vector"
                        className="relative flex cursor-pointer flex-row rounded-full text-lg wrapper-button">
                        Apply Now
                    </Button>
                </section>
                <section className='text-base flex flex-col gap-1 mt-[89px]'>
                    <div className='font-light'>Contact us at</div>
                    <div className='font-medium'>Support@sci.com</div>
                    <div className='font-light'>For inquiries and supplementary materials</div>
                </section>
                <section className='flex flex-row justify-center gap-x-2 mt-6'>
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
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    }
}


export default Footer
