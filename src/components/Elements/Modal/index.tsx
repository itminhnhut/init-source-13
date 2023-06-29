import { ReactNode, useRef, useState, useEffect, Dispatch, SetStateAction } from 'react'
import classNames from 'classnames'
import { styled } from 'styled-components'
import Image from 'next/image'

import ReactPortal from '@/components/Elements/Portal'
import X from '@/components/Icons/X'
import IconButton from '../Button/IconButton'
import { AnimatePresence, motion } from 'framer-motion'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { Lexend } from 'next/font/google'

type ModalProps = {
    children: ReactNode
    isOpen: boolean
    onClose: () => void
    wrapperClassName?: string
}

const backgroundVariants = {
    hide: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
}

const modalVariants = {
    hide: {
        top: '100%',
        opacity: 0,
    },
    show: {
        top: 0,
        opacity: 1,
        transition: {
            delay: 0.25,
            type: 'tween',
        },
    },
}

const Modal = ({ children, isOpen, onClose, wrapperClassName }: ModalProps) => {
    const ref = useRef<HTMLDivElement | null>(null)

    useOnClickOutside(ref, () => {
        if (isOpen) {
            onClose()
        }
    })

    return (
        <ReactPortal wrapperId="react-portal-modal-container">
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        variants={backgroundVariants}
                        initial="hide"
                        animate="show"
                        exit="hide"
                        id="staticModal"
                        data-modal-backdrop="static"
                        aria-hidden="true"
                        className={classNames(
                            'fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full overflow-y-hidden p-4 transition-all md:inset-0',
                            {
                                'backdrop-blur-[10px]': isOpen,
                            },
                        )}
                    >
                        <WrapperContainer
                            as={motion.section}
                            variants={modalVariants}
                            initial="hide"
                            animate="show"
                            exit="hide"
                            className={classNames(
                                'fixed flex h-full w-full max-w-2xl items-center justify-center px-4 mb:w-[500px] mb:px-0 ',

                                wrapperClassName,
                            )}
                            ref={ref}
                        >
                            <section
                                className="relative
                                w-full
                        rounded-lg border-[1px] border-solid 
                        border-gray-1 bg-black-1 px-6
                        py-4 text-white
                        shadow
                    "
                            >
                                <section className="mb-2 flex cursor-pointer justify-end">
                                    <IconButton onClick={onClose}>
                                        <X size={16} />
                                    </IconButton>
                                </section>
                                {children}
                            </section>
                        </WrapperContainer>
                    </motion.div>
                )}
            </AnimatePresence>
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
