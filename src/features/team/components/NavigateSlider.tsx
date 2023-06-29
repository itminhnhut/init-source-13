import IconButton from '@/components/Elements/Button/IconButton'
import ChevronLeft from '@/components/Icons/ChevronLeft'
import ChevronRight from '@/components/Icons/ChevronRight'
import React from 'react'

interface INavigateSlider {
    slidePrev: () => void
    slideNext: () => void
}

const NavigateSlider: React.FC<INavigateSlider> = ({ slidePrev, slideNext }) => {
    return (
        <div className="z-[1] mt-10 flex w-full justify-center space-x-6">
            <IconButton onClick={slidePrev}>
                <ChevronLeft size={16} />
            </IconButton>

            <IconButton onClick={slideNext}>
                <ChevronRight size={16} />
            </IconButton>
        </div>
    )
}

export default NavigateSlider
