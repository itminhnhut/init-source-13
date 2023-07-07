import React from 'react'

import ChevronLeft from './ChevronLeft'
import { SVGTypes } from './type'

const ChevronRight: React.FC<SVGTypes> = ({ size, color }) => {
    return <ChevronLeft size={size} color={color} className="rotate-180" />
}

export default ChevronRight
