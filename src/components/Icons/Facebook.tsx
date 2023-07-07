import React from 'react'

import { SVGTypes } from './type'

const Facebook: React.FC<SVGTypes> = ({ size, color = 'currentColor' }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.6417 8.66485L5.6417 14.659H2.9575L2.9575 8.66485H0.727539L0.727539 6.23436H2.9575V5.35007C2.9575 2.06705 4.29444 0.34082 7.12318 0.34082C7.99038 0.34082 8.20719 0.48379 8.68208 0.600284V3.0043C8.1504 2.90899 8.00071 2.85603 7.44838 2.85603C6.79281 2.85603 6.4418 3.04666 6.12176 3.42262C5.80172 3.79858 5.6417 4.44988 5.6417 5.38184V6.23966H8.68208L7.8665 8.67015L5.6417 8.67015V8.66485Z"
                fill={color}
            />
        </svg>
    )
}

export default Facebook
