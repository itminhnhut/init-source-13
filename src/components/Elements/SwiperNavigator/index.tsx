import React, { memo } from 'react'

import IconButton from '@/components/Elements/Button/IconButton'
import ChevronLeft from '@/components/Icons/ChevronLeft'
import ChevronRight from '@/components/Icons/ChevronRight'

import classNames from 'classnames'

interface INavigator {
    slidePrev: () => void
    slideNext: () => void
    className?: string
}

const Navigator: React.FC<INavigator> = ({ slidePrev, slideNext, className }) => {
    return (
        <div className={classNames('z-[1] flex w-full justify-center gap-6', className)}>
            <IconButton onClick={slidePrev}>
                <ChevronLeft size={16} />
            </IconButton>

            <IconButton onClick={slideNext}>
                <ChevronRight size={16} />
            </IconButton>
        </div>
    )
}

export default memo(Navigator)
