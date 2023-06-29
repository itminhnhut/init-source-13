import { RefObject, useEffect } from 'react'

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: () => void): void {
    useEffect(() => {
        const handlerClick = (event: MouseEvent) => {
            const el = ref?.current
            if (!el || el.contains(event.target as Node)) {
                return
            }
            handler()
        }
        window.addEventListener('mousedown', handlerClick)

        return () => window.removeEventListener('mousedown', handlerClick)
    }, [handler, ref])
}
