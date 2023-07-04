import { useRouter } from 'next/router'

export const LANGUAGE_TAG = {
    VI: 'vi',
    EN: 'en',
}

export const LANGUAGE_NAME = {
    [LANGUAGE_TAG.VI]: 'Vietnamese',
    [LANGUAGE_TAG.EN]: 'English',
} as const

export type LANGUAGE_KEY = keyof typeof LANGUAGE_TAG

const useLanguage = (): [string | undefined, (nextLanguage?: string) => void] => {
    const router = useRouter()
    const { locale: currentLanguage } = router
    // Language toggle
    const setLanguage = (nextLanguage?: string) => {
        const nextLang =
            typeof nextLanguage === 'string'
                ? nextLanguage
                : currentLanguage === LANGUAGE_TAG.VI
                ? LANGUAGE_TAG.EN
                : LANGUAGE_TAG.VI

        router.push(router.asPath, router.asPath, {
            locale: nextLang,
        })
    }

    return [currentLanguage, setLanguage]
}

export default useLanguage
