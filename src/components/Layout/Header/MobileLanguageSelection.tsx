import useLanguage, { LANGUAGE_KEY, LANGUAGE_NAME, LANGUAGE_TAG } from '@/hooks/useLanguage'
import { useWindowSize } from '@/hooks/useWindowSize'
import classNames from 'classnames'
import React from 'react'

const MobileLanguageSelection: React.FC<{ isShow: boolean }> = ({ isShow }) => {
    const [currentLanguage, setLanguage] = useLanguage()
    const { width } = useWindowSize()

    return (
        <div
            className={classNames(
                'fixed top-0 z-[999] flex h-full w-full items-center justify-center bg-[#151515]/30 text-white backdrop-blur-[15px] transition-all duration-300 ease-in-out',
                {
                    '-right-full opacity-0': !isShow,
                    'right-0 opacity-100': isShow,
                },
            )}
        >
            <div className="flex h-full pt-[calc(80px+34px)] flex-col items-center space-y-4">
                {Object.keys(LANGUAGE_TAG).map((key) => {
                    const language = LANGUAGE_TAG[key as LANGUAGE_KEY]
                    return (
                        <button
                            disabled={language === currentLanguage}
                            key={key}
                            onClick={() => setLanguage(key)}
                            className={classNames('py-[10px] text-gray-2 text-lg', {
                                '!text-white !text-base': language === currentLanguage,
                            })}
                        >
                            {LANGUAGE_NAME[language]}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default MobileLanguageSelection
