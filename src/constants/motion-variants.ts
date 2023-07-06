import { Variant } from 'framer-motion'

export const easeArray = [0.33, 1, 0.68, 1]// [0.075, 0.82, 0.165, 1]

const defaultVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
}

export const transitionProps = {
    ease: easeArray,
    duration: 1.5,
}

export const getOutScreenVariants = (
    fromOutScreenPosition: 'left' | 'right' | 'bottom' | 'top',
    extendVariants?: { hidden?: Variant; show?: Variant },
) => {
    let initX: string | number = 0,
        initY: string | number = 0

    if (['left', 'right'].includes(fromOutScreenPosition)) {
        initX = (fromOutScreenPosition === 'left' ? -1 : 1) * 100 + 'vw'
    }

    if (['bottom', 'top'].includes(fromOutScreenPosition)) {
        initY = (fromOutScreenPosition === 'top' ? -1 : 1) * 100 + 'vh'
    }

    return {
        hidden: {
            ...defaultVariants['hidden'],
            y: initY,
            x: initX,
            ...extendVariants?.['hidden'],
        },
        show: {
            ...defaultVariants['show'],
            y: 0,
            x: 0,
            transition: {
                ...transitionProps,
            },
            ...extendVariants?.['show'],
        },
    }
}
