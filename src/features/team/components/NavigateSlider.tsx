import ChevronLeft from '@/components/Icons/ChevronLeft'
import ChevronRight from '@/components/Icons/ChevronRight'
import React from 'react'

interface INavigateSlider {
    slidePrev: () => void
    slideNext: () => void
}

const NavigateSlider: React.FC<INavigateSlider> = ({ slidePrev, slideNext }) => {
    return (
        <div className="space-x-6 z-[1] mt-10 flex w-full justify-center">
            <div
                onClick={slidePrev}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] border border-gray-1 bg-black-1 p-2 text-white"
            >
                <ChevronLeft size={16} />
            </div>
            <div
                onClick={slideNext}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[10px] border border-gray-1 bg-black-1 p-2 text-white"
            >
                <ChevronRight size={16} />
            </div>
        </div>
    )
}

export default NavigateSlider
