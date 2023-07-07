import type { SVGTypes } from './type'
import React from 'react'

const ChevronLeft: React.FC<SVGTypes> = ({ size, color = 'currentColor', className }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 10 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M8.25 1.5L1.75 8L8.25 14.5"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ChevronLeft
