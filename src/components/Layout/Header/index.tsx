import Image from 'next/image'
import dynamic from 'next/dynamic'
import ToggleLanguage from './ToggleLanguage'
import { useState } from 'react'
import classNames from 'classnames'

const HeaderTabs = dynamic(() => import('./HeaderTabs'), { ssr: false })
const HeaderMobile = dynamic(() => import('./HeaderMobile'), { ssr: false })
const HamburgerMenu = dynamic(() => import('./HamburgerMenu'), { ssr: false })

const Header: React.FC = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <header className="fixed top-0 w-full z-[1000]">
                <div className="flex justify-between items-center md:mx-[110px] px-4 h-20 ">
                    <div
                        className={classNames('transition-opacity duration-300 delay-100', {
                            'opacity-0': isOpen,
                        })}
                    >
                        <Image src="/images/sci-logo.svg" width={118} height={46} alt="sci-logo" />
                    </div>
                    <div className=" hidden mb:flex">
                        <HeaderTabs />
                    </div>
                    <div className=" hidden mb:flex">
                        <ToggleLanguage />
                    </div>

                    <div onClick={() => setOpen((prev) => !prev)} className="mb:hidden border border-gray-1 p-3 rounded-xl cursor-pointer">
                        <HamburgerMenu open={isOpen} />
                    </div>
                </div>
            </header>
            <HeaderMobile isOpen={isOpen} />
        </>
    )
}

export default Header
