import { ReactNode, useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

import classNames from 'classnames'

const defaultPortalReact = {
    wrapperId: 'react-portal',
    className: '',
}

type ReactPortalProps = {
    children?: ReactNode
    wrapperId: string
    className?: string
    font?: any
} & typeof defaultPortalReact

const ReactPortal = ({ children, wrapperId, className, font }: ReactPortalProps) => {
    const [wrapper, setWrapper] = useState<Element | null>(null)
    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId)
        let created: any = null
        if (!element) {
            created = true
            const wrapper = document.createElement('div')
            wrapper.setAttribute('id', wrapperId)
            font && wrapper.setAttribute('class', classNames(font?.className, className))
            document.body.appendChild(wrapper)
            element = wrapper
        }

        setWrapper(element)

        return () => {
            if (created && element?.parentNode) {
                element.parentNode.removeChild(element)
            }
        }
    }, [className, font, wrapperId])

    if (!wrapper) return null
    return createPortal(children, wrapper)
}

ReactPortal.defaultProps = defaultPortalReact

export default ReactPortal
