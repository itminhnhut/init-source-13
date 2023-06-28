import { FC, ReactNode } from 'react'

import Image from 'next/image'
import { styled } from 'styled-components'
import classNames from 'classnames'

interface LayoutI {
    children: ReactNode
    className?: string
    iconType: string
}

const Button: FC<LayoutI> = ({ children, className, iconType }) => {
    const getIcon: any = {
        vector: '/images/button/ic_vector.svg',
        send: '/images/button/ic_send.svg',
    }

    return (
        <button className={classNames(className, 'flex  cursor-pointer flex-row bg-gradient-2 px-6 py-4 font-medium ')}>
            {children}
            {iconType && <Image className="ml-[10px]" width={24} height={24} src={getIcon?.[iconType]} alt="vector" />}
        </button>
    )
}

export default Button
