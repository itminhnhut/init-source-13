import { useTranslation } from 'next-i18next'

const Footer = (): any => {
    const { t } = useTranslation()

    return (
        <footer className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center pb-6 text-white opacity-50">
            <p className="text-sm font-light">Copyrights © 2023 SCI.com. All Rights Reserved.</p>
            <div className="flex flex-row text-sm font-normal">
                <div className="cursor-pointer underline underline-offset-2 lg:no-underline">
                    {t('footer:term_of_use')}
                </div>
                <ul className="ml-6 list-outside list-disc">
                    <li></li>
                </ul>
                <div className="cursor-pointer underline underline-offset-2 lg:no-underline">
                    {t('footer:privacy_policy')}
                </div>
            </div>
        </footer>
    )
}

export default Footer
