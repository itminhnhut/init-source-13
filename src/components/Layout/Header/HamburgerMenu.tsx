import classNames from 'classnames'
import React from 'react'
import { styled } from 'styled-components'

interface IHamburgerMenu {
    open: boolean
    lineSpacing?: number
    lineWidth?: number
    color?: string
    size?: number
}

const HamburgerMenu: React.FC<IHamburgerMenu> = ({ open, lineSpacing, lineWidth, color, size }) => {
    return (
        <HamburgerWrapper
            lineSpacing={lineSpacing}
            lineWidth={lineWidth}
            color={color}
            size={size}
            className={classNames({
                active: open,
            })}
        >
            <div className="box">
                <div className="inner" />
            </div>
        </HamburgerWrapper>
    )
}

HamburgerMenu.defaultProps = {
    lineSpacing: 4,
    lineWidth: 2,
    color: '#fff',
    size: 18,
}

const HamburgerWrapper = styled.div<{ size?: number; lineSpacing?: number; lineWidth?: number; color?: string }>`
    --size: ${({ size }) => size}px;
    --backgroundColor: ${({ color }) => color};
    --lineWidth: ${({ lineWidth }) => lineWidth}px;
    --lineSpace: ${({ lineSpacing, lineWidth }) => (lineWidth || 0) + (lineSpacing || 0)}px;
    cursor: pointer;
    width: var(--size);
    height: calc(var(--lineSpace) * 3);
    .box {
        width: var(--size);
        height: calc(var(--lineSpace) * 3);
        display: inline-block;
        position: relative;
    }

    .inner {
        position: absolute;
        width: 100%;
        background-color: var(--backgroundColor);
        height: var(--lineWidth);
        border-radius: 20px;
        transition: transform 0.15s ease;
        &::before,
        &::after {
            position: absolute;
            width: 100%;
            background-color: var(--backgroundColor);
            height: var(--lineWidth);
            border-radius: 20px;
            transition: transform 0.15s ease;
        }
    }

    .inner {
        top: 50%;
        margin-top: calc((var(--lineWidth) / 2) * -1);
        transition: 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        &::before {
            content: '';
            display: block;
            top: calc(var(--lineSpace) * -1);
            transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
        }
        &::after {
            content: '';
            display: block;
            bottom: calc(var(--lineSpace) * -1);
            transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
    }

    &.active {
        .inner {
            transform: rotate(225deg);
            transition-delay: 0.12s;
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            &:before {
                top: 0;
                opacity: 0;
                transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
            }
            &::after {
                bottom: 0;
                transform: rotate(-90deg);
                transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
            }
        }
    }
`

export default HamburgerMenu
