import { ReactNode, useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'

const defaultPortalReact = {
    wrapperId: 'react-portal',
}

type ReactPortalProps = {
    children: ReactNode
    wrapperId: string
} & typeof defaultPortalReact

const ReactPortal = ({ children, wrapperId }: ReactPortalProps) => {
    const [wrapper, setWrapper] = useState<Element | null>(null)

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId)
        let created: any = null

        if (!element) {
            created = true
            const wrapper = document.createElement('div')
            wrapper.setAttribute('id', wrapperId)
            document.body.appendChild(wrapper)
            element = wrapper
        }

        setWrapper(element)

        return () => {
            if (created && element?.parentNode) {
                element.parentNode.removeChild(element)
            }
        }
    }, [wrapperId])

    if (!wrapper) return null
    return createPortal(children, wrapper)
}

ReactPortal.defaultProps = defaultPortalReact

export default ReactPortal
