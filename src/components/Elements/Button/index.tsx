import { FC, ReactNode } from 'react'

import Image from 'next/image'

import classNames from 'classnames'

interface LayoutI extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    iconType?: string
    disabled?: boolean
}

const Button: FC<LayoutI> = ({ children, className, iconType, type = 'button', onClick }) => {
    const getIcon: any = {
        vector: '/images/button/ic_vector.svg',
        send: '/images/button/ic_send.svg',
    }
    return (
        <button
            className={classNames(
                className,
                'flex cursor-pointer flex-row rounded-[10px] bg-gradient-2 px-6 py-4 font-medium',
            )}
            type={type}
            onClick={onClick}
        >
            {children}
            {iconType && <Image className="ml-[10px]" width={24} height={24} src={getIcon?.[iconType]} alt="vector" />}
        </button>
    )
}

export default Button
