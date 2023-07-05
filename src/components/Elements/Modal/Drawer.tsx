import classNames from 'classnames'
import React from 'react'
import { PropsWithChildren } from 'react'

interface IDrawer {
    isOpen: boolean
}

const Drawer: React.FC<PropsWithChildren<IDrawer>> = ({ isOpen, children }) => {
    return (
        <div
            className={classNames(
                'fixed top-0 z-[999] flex h-full w-full items-center justify-center bg-[#151515]/30 text-white backdrop-blur-[15px] transition-all duration-300 ease-in-out',
                {
                    '-right-full opacity-0': !isOpen,
                    'right-0 opacity-100': isOpen,
                },
            )}
        >
            {children}
        </div>
    )
}

export default Drawer
