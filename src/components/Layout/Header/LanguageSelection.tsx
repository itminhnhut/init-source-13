import Modal from '@/components/Elements/Modal'
import Global from '@/components/Icons/Global'
import useLanguage, { LANGUAGE_KEY, LANGUAGE_NAME, LANGUAGE_TAG } from '@/hooks/useLanguage'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useRef, useState } from 'react'

const LanguageSelection = () => {
    const [currentLanguage, setLanguage] = useLanguage()
    const ref = useRef(null)
    const [isShow, setShow] = useState(false)
    useOnClickOutside(ref, () => {
        if (isShow) setShow(false)
    })

    return (
        <div className="relative" ref={ref}>
            <div className="cursor-pointer" onClick={() => setShow((prev) => !prev)}>
                <Global size={24} />
            </div>
            <AnimatePresence>
                {isShow && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            top: 20,
                        }}
                        animate={{
                            opacity: 1,
                            top: '100%',
                        }}
                        exit={{
                            opacity: 0,
                            top: 20,
                        }}
                        className={classNames(
                            'absolute right-0 top-full mt-2 space-y-[1px] overflow-hidden rounded-[10px]',
                        )}
                    >
                        {Object.keys(LANGUAGE_TAG).map((key) => {
                            const language = LANGUAGE_TAG[key as LANGUAGE_KEY]
                            return (
                                <button
                                    disabled={language === currentLanguage}
                                    key={key}
                                    onClick={() => {
                                        setLanguage(language)
                                        setShow(false)
                                    }}
                                    className={classNames(
                                        'flex w-full cursor-pointer items-center justify-center bg-black-1 px-6 py-3 text-gray-2 transition hover:bg-gray-1 hover:text-white disabled:cursor-default',
                                        {
                                            'bg-gray-1 text-white': language === currentLanguage,
                                        },
                                    )}
                                >
                                    {LANGUAGE_NAME[language]}
                                </button>
                            )
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default LanguageSelection
