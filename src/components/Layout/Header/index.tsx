import Image from 'next/image'
import dynamic from 'next/dynamic'
import ToggleLanguage from './ToggleLanguage'
import { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'

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
                    'z-[999] transition-all duration-300 ease-in-out w-full h-full flex justify-center items-center text-white fixed backdrop-blur-[15px] bg-[#151515]/30',
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
            <header className="sticky top-0 w-full z-[1000]">
                <div className="flex justify-between items-center xxl:mx-[110px] px-4 h-20 ">
                    {/* LOGO */}
                    <div
                        className={classNames('transition-opacity duration-300 delay-100', {
                            'opacity-0': isOpenMBHeader,
                        })}
                    >
                        <Image src="/images/sci-logo.svg" width={118} height={46} alt="sci-logo" />
                    </div>

                    {/* MENU TAB */}
                    <div className=" hidden mb:flex">
                        <HeaderTabs />
                    </div>

                    {/* LANGUAGE */}
                    <div className=" hidden mb:flex">
                        <ToggleLanguage />
                    </div>

                    {/* MOBILE HAMBURGER */}
                    <div onClick={() => setOpenMBHeader((prev) => !prev)} className="mb:hidden border border-gray-1 p-3 rounded-xl cursor-pointer">
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
