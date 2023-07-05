import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'

import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Button = dynamic(() => import('@/components/Elements/Button'), { ssr: false })
const Modal = dynamic(() => import('@/components/Elements/Modal'), { ssr: false })
const InputField = dynamic(() => import('@/components/Form/InputField'), { ssr: false })
const TextAreaField = dynamic(() => import('@/components/Form/TextAreaField'), { ssr: false })


const SOCIAL_REGEX =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin'],
})


const defaultForm = {
    isOpen: false,
}

type FormProps = {
    isOpen: boolean
    onClose: () => void
} & typeof defaultForm

const schema = yup.object().shape({
    name: yup.string().required('required'),
    email: yup.string().email('email').required('required'),
    telegram: yup.number().required('required'),
    link: yup.string().required('required').matches(SOCIAL_REGEX, 'matches'),
});

type FormValues = {
    name: string,
    link: string,
    email: string,
    telegram: number,
    description?: string
}

const initForm = {
    name: '',
    link: '',
    email: '',
    telegram: 0,
    description: ''
}

const FormRegister = ({ isOpen, onClose }: FormProps) => {
    const { t } = useTranslation(['common', 'form', 'validation'])

    const { handleSubmit, control, formState, } = useForm<FormValues>({
        defaultValues: initForm,
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const { errors, isSubmitting, isValid } = formState


    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)


    const onInvalid = (errors: any) => console.error(errors)


    return <Modal isOpen={!isOpen} onClose={onClose}>
        {/* <div className="text-center">
        <div className="text-lg font-semibold">Thank you!</div>
        <div className=" mb-6 text-gray-2">Description</div>
        <div className="flex justify-center">
            <Image src="/images/Modal/check_success.png" width={332} height={332} alt="check_success" />
        </div>
    </div> */}
        <div>
            <h1 className={`${montserrat.className} mt-2 text-center text-[20px] font-semibold leading-6`}>
                {t('form:title')}
            </h1>
            <h2 className="mt-1 text-center opacity-50"> {t('form:des')}</h2>
            <form className="mt-[22px]" onSubmit={handleSubmit(onSubmit, onInvalid)}>
                <Controller
                    control={control}
                    name="name"
                    render={({ field: { value, onChange } }) => (
                        <InputField name="name" t={t} errors={errors} label={t('form:label:full_name')} placeholder={t('form:placeholder:full_name')} value={value} onChange={onChange} isRequired />
                    )}
                />

                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                        <InputField name="email" t={t} errors={errors} className="mt-4" label={t('form:label:email')} placeholder={t('form:placeholder:email')} value={value} onChange={onChange} isRequired />
                    )}
                />

                <Controller
                    control={control}
                    name="telegram"
                    render={({ field: { onChange, value } }) => (
                        <InputField name="telegram" t={t} errors={errors} className="mt-4" label={t('form:label:telegram')} placeholder={t('form:placeholder:telegram')} value={value} onChange={onChange} isRequired />
                    )}
                />

                <Controller
                    control={control}
                    name="link"
                    render={({ field: { onChange, value } }) => (
                        <InputField name="link" t={t} errors={errors} className="mt-4" label={t('form:label:link')} placeholder={t('form:placeholder:link')} value={value} onChange={onChange} isRequired />
                    )}
                />

                <Controller
                    control={control}
                    name="description"
                    render={({ field: { onChange, value } }) => (
                        <TextAreaField className="mt-4" placeholder={t('form:placeholder:description')} label={t('form:label:description')} {...{ onChange, value }} rows={3} />
                    )}
                />
                <Button className="mt-6 flex w-full justify-center rounded-[10px] !py-3 btn-gradient" disabled={!isValid || isSubmitting} type="submit">
                    {t('common:button:send')}
                </Button>
            </form>
        </div>
    </Modal >
}

export default FormRegister