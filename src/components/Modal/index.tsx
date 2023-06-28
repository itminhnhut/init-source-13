import { ReactNode, useRef, useState, useEffect, Dispatch, SetStateAction } from 'react'
import ReactPortal from '@/components/Portal'
import classNames from 'classnames'
import { styled } from 'styled-components'
import Image from 'next/image'

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
                tabIndex="-1"
                aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <WrapperContainer className={classNames('relative w-full max-w-2xl max-h-full lg:w-[500px] h-[588px]', { '!fixed': isOpen })} ref={ref}>
                    <section
                        className="relative bg-black-1 
                        border-gray-1 border-[1px] border-solid 
                        rounded-lg shadow h-full
                        px-6 py-4
                        text-white
                    "
                    >
                        <section className="cursor-pointer flex justify-end">
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
