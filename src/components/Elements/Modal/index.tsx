import { ReactNode, useRef, useState, useEffect, Dispatch, SetStateAction } from 'react'
import classNames from 'classnames'
import { styled } from 'styled-components'
import Image from 'next/image'

import ReactPortal from '@/components/Elements/Portal'

type ModalProps = {
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            if (ref.current && !ref.current.contains(e.target)) {
                onClose()
            }
        }
        document.addEventListener('click', checkIfClickedOutside)
        return () => {
            document.removeEventListener('click', checkIfClickedOutside)
        }
    }, [onClose])

    if (!isOpen) return null

    return (
        <ReactPortal wrapperId="react-portal-modal-container">
            <main
                id="staticModal"
                data-modal-backdrop="static"
                aria-hidden="true"
                className="fixed left-0 right-0 top-0 z-50  h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0"
            >
                <WrapperContainer
                    className={classNames('relative h-[588px] max-h-full w-full max-w-2xl lg:w-[500px]', {
                        '!fixed': isOpen,
                    })}
                    ref={ref}
                >
                    <section
                        className="relative h-full 
                        rounded-lg border-[1px] border-solid 
                        border-gray-1 bg-black-1 px-6
                        py-4 text-white
                        shadow
                    "
                    >
                        <section className="flex cursor-pointer justify-end">
                            <Image src="/images/modal/close.svg" width={40} height={40} alt="close" />
                        </section>
                        {children}
                    </section>
                </WrapperContainer>
            </main>
        </ReactPortal>
    )
}

const WrapperContainer = styled.section`
    margin: auto;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`

export default Modal
