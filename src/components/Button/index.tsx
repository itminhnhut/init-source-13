import { FC, ReactNode } from 'react'

import Image from 'next/image'
import { styled } from 'styled-components'
import classNames from 'classnames'

interface LayoutI {
    children: ReactNode
    className?: string
}

const Button: FC<LayoutI> = ({ children, className }) => {
    return (
        <StyledButton
            className={classNames('px-6 py-4 text-lg font-medium rounded-full w-[190px] bg-gradient-2 cursor-pointer relative flex flex-row', className)}
        >
            {children}
            <Image className="ml-[10px]" width={24} height={24} src="/images/button/ic_vector.svg" alt="vector" />
        </StyledButton>
    )
}

const StyledButton = styled.div`
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

export default Button
