import React from 'react'
import { SVGTypes } from './type'

const In: React.FC<SVGTypes> = ({ size, color = 'currentColor' }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.2188 9.6875H5.24023V19.186H8.2188V9.6875Z" fill={color} />
            <path d="M16.2759 9.48157C16.1661 9.46784 16.0495 9.46098 15.9328 9.45411C14.2651 9.38548 13.3248 10.3738 12.9954 10.7993C12.9062 10.9159 12.865 10.9846 12.865 10.9846V9.71491H10.0168V19.2134H12.865H12.9954C12.9954 18.2457 12.9954 17.2849 12.9954 16.3172C12.9954 15.7956 12.9954 15.274 12.9954 14.7524C12.9954 14.1073 12.9474 13.421 13.2699 12.8307C13.5445 12.3366 14.0386 12.0895 14.5945 12.0895C16.2416 12.0895 16.2759 13.5788 16.2759 13.7161C16.2759 13.7229 16.2759 13.7298 16.2759 13.7298V19.2545H19.2545V13.0572C19.2545 10.9365 18.177 9.68746 16.2759 9.48157Z" fill="white" />
            <path d="M6.72949 8.45898C7.68466 8.45898 8.45898 7.68466 8.45898 6.72949C8.45898 5.77432 7.68466 5 6.72949 5C5.77432 5 5 5.77432 5 6.72949C5 7.68466 5.77432 8.45898 6.72949 8.45898Z" fill="white" />
        </svg>
    )
}

export default In