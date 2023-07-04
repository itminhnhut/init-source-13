import { GetStaticProps } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { styled } from 'styled-components'

import dynamic from 'next/dynamic'

const Button = dynamic(() => import('@/components/Elements/Button'), { ssr: false })
const Modal = dynamic(() => import('@/components/Elements/Modal'), { ssr: false })
const InputField = dynamic(() => import('@/components/Form/InputField'), { ssr: false })
const TextAreaField = dynamic(() => import('@/components/Form/TextAreaField'), { ssr: false })

import { Montserrat } from 'next/font/google'
import { useState } from 'react'
import { motion } from 'framer-motion'

const montserrat = Montserrat({
    subsets: ['latin'],
})

export default function Home() {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggle = () => setIsOpen((prev) => !prev)

    return (
        <main className="main">
            <section className="w-full lg:w-[600px] pt-[149px] lg:pt-[129px] text-center text-white px-4 lg:mx-0">
                <motion.h1
                    initial={{
                        y: '-300px',
                        opacity: 0,
                    }}
                    animate={{
                        y: '0',
                        opacity: 1,
                    }}
                    className="text-4xl4 lg:text-6xl4 font-semibold"
                >
                    {t('home:title')}
                </motion.h1>
                <motion.p
                    initial={{
                        y: '-350px',
                        opacity: 0,
                    }}
                    animate={{
                        y: '0',
                        opacity: 1,
                    }}
                    className="mt-4 text-lg"
                >
                    {t('home:subTitle')}
                </motion.p>
                <motion.div
                    initial={{
                        y: '300px',
                        opacity: 0,
                    }}
                    animate={{
                        y: '0',
                        opacity: 1,
                    }}
                    className="mt-[60px] lg:mt-[82px] flex justify-center"
                >
                    <WrapperButton
                        onClick={toggle}
                        iconType="vector"
                        className="relative flex cursor-pointer flex-row rounded-full text-lg"
                    >
                        {t('common:button.apply')}
                    </WrapperButton>
                </motion.div>
                <Modal isOpen={isOpen} onClose={toggle}>
                    {/* <div className="text-center">
                        <div className="text-lg font-semibold">Thank you!</div>
                        <div className=" mb-6 text-gray-2">Description</div>
                        <div className="flex justify-center">
                            <Image src="/images/Modal/check_success.png" width={332} height={332} alt="check_success" />
                        </div>
                    </div> */}
                    <div>
                        <h1
                            className={`${montserrat.className}
                         mt-2 text-center text-[20px] font-semibold leading-6`}
                        >
                            Your Information
                        </h1>
                        <h2 className="mt-1 text-center opacity-50">Description</h2>
                        <form className="mt-[22px]">
                            <InputField label="Your Name" />
                            <InputField className="mt-4" label="Your Email" isRequired />
                            <TextAreaField className="mt-4 " label="Your Description" rows={3} />
                            <Button iconType="send" className="mt-6 flex w-full justify-center rounded-[10px] !py-3">
                                Send
                            </Button>
                        </form>
                    </div>
                </Modal>
            </section>
        </main>
    )
}

const WrapperButton = styled(Button)`
    position: relative;
    transition: all 0.1s ease-out;
    &:hover {
        box-shadow: 0px 5px 30px 0px #8e32d8;
        &::before {
            background: linear-gradient(0deg, rgba(240, 135, 255, 1) 0%, rgba(240, 135, 255, 0) 100%);
        }
    }
    &::before {
        content: '';
        display: block;
        position: absolute;
        border-radius: 1000px;
        top: -0.1em;
        bottom: -0.1em;
        right: -0.1em;
        left: -0.1em;
        z-index: -1;
        background: linear-gradient(0deg, rgba(240, 135, 255, 0) 0%, rgba(240, 135, 255, 1) 100%);
    }
`

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common', 'home'])),
        },
    }
}
