import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LanguageSelection from './LanguageSelection'
import MobileLanguageSelection from './MobileLanguageSelection'
import Global from '@/components/Icons/Global'
import { styled } from 'styled-components'
import { HEADER_DESKTOP_HEIGHT, HEADER_MOBILE_HEIGHT } from '@/styles/constants'
import Drawer from '@/components/Elements/Modal/Drawer'
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
            <Drawer isOpen={isOpenMBHeader}>
                <div className="space-y-8">
                    <HeaderTabs />
                </div>
            </Drawer>
        ),
        [isOpenMBHeader],
    )

    return (
        <>
            <header className="relative z-[1000] w-full">
                <HeaderWrapper
                    // as={motion.div}
                    // variants={getOutScreenVariants('top')}
                    // initial="hidden"
                    // animate="show"
                    className="flex items-center justify-between px-4 xxl:mx-[110px] "
                >
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
                </HeaderWrapper>
            </header>

            {/* MOBILE LANG SELECTION */}
            <MobileLanguageSelection
                isShow={isShowMBLanguage}
                setShow={(boolean: boolean) => {
                    setShowMBLanguage(boolean)
                }}
            />
            {/* MOBILE LANG SELECTION */}

            {/* MOBILE NAV */}
            {renderMobileHeader()}
            {/* MOBILE NAV */}
        </>
    )
}

const HeaderWrapper = styled.div`
    height: ${HEADER_MOBILE_HEIGHT}px;

    @media screen and (min-width: 820px) {
        height: ${HEADER_DESKTOP_HEIGHT}px;
    }
`

export default Header
