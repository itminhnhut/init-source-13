import { Lexend } from 'next/font/google'
import { ReactNode, useState, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'

const lexend = Lexend({
    subsets: ['latin'],
})

const defaultPortalReact = {
    wrapperId: 'react-portal',
    className: '',
}

type ReactPortalProps = {
    children: ReactNode
    wrapperId: string
    className: string
} & typeof defaultPortalReact

const ReactPortal = ({ children, wrapperId, className }: ReactPortalProps) => {
    const [wrapper, setWrapper] = useState<Element | null>(null)

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId)
        let created: any = null

        if (!element) {
            created = true
            const wrapper = document.createElement('div')
            wrapper.setAttribute('id', wrapperId)
            wrapper.setAttribute('class', classNames(lexend.className, className))
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
