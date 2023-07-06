import { FC } from 'react'

import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const Modal = dynamic(() => import('@/components/Elements/Modal'), { ssr: false })

type ModalProps = {
    isOpen: boolean
    onClose: () => void
}

const ModalAlert: FC<ModalProps> = ({ isOpen, onClose }) => {
    const { t } = useTranslation('common')

    return <Modal isOpen={isOpen} onClose={onClose}>
        <div className="text-center">
            <div className="text-lg font-semibold">{t('success')}</div>
            <div className="mt-1 text-gray-2">{t('success_title')}</div>
            <div className="mb-6 text-gray-2">{t('success_des')}</div>
            <div className="flex justify-center">
                <Image src="/images/modal/check_success.png" width={332} height={332} alt="check_success" />
            </div>
        </div>
    </Modal>
}

export default ModalAlert