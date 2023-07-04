import Image from 'next/image'
import dynamic from 'next/dynamic'
import ToggleLanguage from './ToggleLanguage'
import { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LanguageSelection from './LanguageSelection'
import { LANGUAGE_KEY, LANGUAGE_NAME, LANGUAGE_TAG } from '@/hooks/useLanguage'
import MobileLanguageSelection from './MobileLanguageSelection'
import Global from '@/components/Icons/Global'

const HeaderTabs = dynamic(() => import('./HeaderTabs'), { ssr: false })
const HamburgerMenu = dynamic(() => import('./HamburgerMenu'), { ssr: false })
const IconButton = dynamic(() => import('@/components/Elements/Button/IconButton'), { ssr: false })

const Header: React.FC = () => {
    const [isOpenMBHeader, setOpenMBHeader] = useState(false)
    const [isShowMBLanguage, setShowMBLanguage] = useState(false)

    const router = useRouter()

    useEffect(() => {
        const toggleMobileModal = (e: UIEvent) => {
            if (window?.innerWidth >= 820) {
                if (isOpenMBHeader) setOpenMBHeader(false)
                if (isShowMBLanguage) setShowMBLanguage(false)
            }
        }
        window.addEventListener('resize', toggleMobileModal)
        return () => window.removeEventListener('resize', toggleMobileModal)
    }, [isOpenMBHeader, isShowMBLanguage])

    useEffect(() => {
        setOpenMBHeader(false)
    }, [router.asPath])

    const renderMobileHeader = useCallback(
        () => (
            <div
                className={classNames(
                    'fixed top-0 z-[999] flex h-full w-full items-center justify-center bg-[#151515]/30 text-white backdrop-blur-[15px] transition-all duration-300 ease-in-out',
                    {
                        '-right-full opacity-0': !isOpenMBHeader,
                        'right-0 opacity-100': isOpenMBHeader,
                    },
                )}
            >
                <div className="space-y-8">
                    <HeaderTabs />
                </div>
            </div>
        ),
        [isOpenMBHeader],
    )

    return (
        <>
            <header className="sticky top-0 z-[1000] w-full">
                <div className="flex h-[60px] items-center justify-between px-4 mb:h-20 xxl:mx-[110px] ">
                    {/* LOGO */}
                    <Link href="/" passHref>
                        <div
                            className={classNames(
                                'h-[34px] w-[90px] transition-opacity delay-100 duration-300 mb:h-[46px] mb:w-[118px]',
                                {
                                    'hidden mb:block': isOpenMBHeader || isShowMBLanguage,
                                },
                            )}
                        >
                            <Image src="/images/sci-logo.svg" width={118} height={46} alt="sci-logo" />
                        </div>
                    </Link>

                    {/* MENU TAB */}
                    <div className=" hidden mb:flex">
                        <HeaderTabs />
                    </div>

                    <div className="flex items-center space-x-6">
                        {/* LANGUAGE DESKTOP */}
                        <div className="hidden mb:block">
                            <LanguageSelection />
                        </div>
                        {/* LANGUAGE DESKTOP */}

                        {/* LANGUAGE MOBILE */}
                        <div
                            className={classNames('cursor-pointer mb:hidden ', {
                                hidden: isShowMBLanguage || isOpenMBHeader,
                            })}
                            onClick={() => setShowMBLanguage(true)}
                        >
                            <Global size={24} />
                        </div>
                        {/* LANGUAGE MOBILE */}

                        <IconButton
                            className=" mb:hidden"
                            onClick={() => {
                                if (isShowMBLanguage) {
                                    setShowMBLanguage(false)
                                    return
                                }
                                setOpenMBHeader((prev) => !prev)
                            }}
                        >
                            <HamburgerMenu open={isOpenMBHeader || isShowMBLanguage} />
                        </IconButton>
                    </div>
                </div>
            </header>

            {/* MOBILE LANGUAGE SELECT */}
            <MobileLanguageSelection isShow={isShowMBLanguage} />
            {/* MOBILE LANGUAGE SELECT */}

            {/* MOBILE NAV */}
            {renderMobileHeader()}
            {/* MOBILE NAV */}
        </>
    )
}

export default Header
