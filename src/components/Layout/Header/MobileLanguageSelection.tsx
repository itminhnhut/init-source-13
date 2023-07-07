import React from 'react'

import Drawer from '@/components/Elements/Modal/Drawer'

import useLanguage, { LANGUAGE_KEY, LANGUAGE_NAME, LANGUAGE_TAG } from '@/hooks/useLanguage'
import classNames from 'classnames'

const MobileLanguageSelection: React.FC<{ isShow: boolean; setShow: (boolean: boolean) => void }> = ({
    isShow,
    setShow,
}) => {
    const [currentLanguage, setLanguage] = useLanguage()

    return (
        <Drawer isOpen={isShow}>
            <div className="flex h-full flex-col items-center space-y-4 pt-[calc(60px+34px)]">
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
                            className={classNames('py-[10px] text-lg text-gray-2', {
                                '!text-base !text-white': language === currentLanguage,
                            })}
                        >
                            {LANGUAGE_NAME[language]}
                        </button>
                    )
                })}
            </div>
        </Drawer>
    )
}

export default MobileLanguageSelection
