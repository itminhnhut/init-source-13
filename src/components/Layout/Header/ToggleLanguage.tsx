import React from 'react'
import classNames from 'classnames'
import useLanguage, { LANGUAGE_KEY, LANGUAGE_TAG } from '@/hooks/useLanguage'
const ToggleLanguage = () => {
    const [currentLanguage, setLanguage] = useLanguage()

    return (
        <div
            onClick={() => setLanguage()}
            className="relative flex h-9 w-24 cursor-pointer items-center justify-center rounded-full bg-gray-1"
        >
            <div
                className={classNames(
                    'absolute top-1/2 h-[calc(100%-4px)] w-12 -translate-y-1/2 rounded-full  bg-white transition-all',
                    {
                        'left-0.5': currentLanguage === LANGUAGE_TAG.VI,
                        'left-[calc(50%-2px)]': currentLanguage === LANGUAGE_TAG.EN,
                    },
                )}
            />
            {Object.keys(LANGUAGE_TAG).map((key) => (
                <div
                    key={key}
                    className={classNames(
                        'z-[1] w-1/2 text-center font-medium uppercase text-white transition-colors',
                        {
                            '!text-black': LANGUAGE_TAG[key as LANGUAGE_KEY] === currentLanguage,
                        },
                    )}
                >
                    {LANGUAGE_TAG[key as LANGUAGE_KEY]}
                </div>
            ))}
        </div>
    )
}

export default ToggleLanguage
