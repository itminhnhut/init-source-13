import Image from 'next/image'
import dynamic from 'next/dynamic'
import ToggleLanguage from './ToggleLanguage'
import { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

const HeaderTabs = dynamic(() => import('./HeaderTabs'), { ssr: false })
const HamburgerMenu = dynamic(() => import('./HamburgerMenu'), { ssr: false })

const Header: React.FC = () => {
    const [isOpenMBHeader, setOpenMBHeader] = useState(false)

    useEffect(() => {
        const toggleMBHeader = (e: UIEvent) => {
            if (window?.innerWidth >= 820 && isOpenMBHeader) {
                setOpenMBHeader(false)
            }
        }
        window.addEventListener('resize', toggleMBHeader)
        return () => window.removeEventListener('resize', toggleMBHeader)
    }, [isOpenMBHeader])

    const renderMobileHeader = useCallback(
        () => (
            <div
                className={classNames(
                    'fixed z-[999] flex h-full w-full items-center justify-center bg-[#151515]/30 text-white backdrop-blur-[15px] transition-all duration-300 ease-in-out',
                    {
                        '-right-full opacity-0': !isOpenMBHeader,
                        'right-0 opacity-100': isOpenMBHeader,
                    },
                )}
            >
                <div className="space-y-8">
                    <HeaderTabs />
                    <ToggleLanguage />
                </div>
            </div>
        ),
        [isOpenMBHeader],
    )

    return (
        <>
            <header className="sticky top-0 z-[1000] w-full">
                <div className="flex h-20 items-center justify-between px-4 xxl:mx-[110px] ">
                    {/* LOGO */}
                    <Link href="/" passHref>
                        <div
                            className={classNames('transition-opacity delay-100 duration-300', {
                                'opacity-0': isOpenMBHeader,
                            })}
                        >
                            <Image src="/images/sci-logo.svg" width={118} height={46} alt="sci-logo" />
                        </div>
                    </Link>

                    {/* MENU TAB */}
                    <div className=" hidden mb:flex">
                        <HeaderTabs />
                    </div>

                    {/* LANGUAGE */}
                    <div className=" hidden mb:flex">
                        <ToggleLanguage />
                    </div>

                    {/* MOBILE HAMBURGER */}
                    <div
                        onClick={() => setOpenMBHeader((prev) => !prev)}
                        className="cursor-pointer rounded-xl border border-gray-1 p-3 mb:hidden"
                    >
                        <HamburgerMenu open={isOpenMBHeader} />
                    </div>
                </div>
            </header>

            {/* MOBILE NAV */}
            {renderMobileHeader()}
        </>
    )
}

export default Header
