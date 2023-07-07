import { ChangeEvent } from 'react'

import { ErrorMessage } from '@hookform/error-message'
import classNames from 'classnames'

const inputFieldDefault = {
    placeholder: 'Enter',
}

type inputFieldProps = {
    t?: any
    name: string
    className?: string
    label: string
    isRequired?: boolean
    placeholder?: string
    value?: string | number
    ref?: any
    errors?: any
    onChange: (data: any) => void
} & typeof inputFieldDefault

const InputField = ({
    className,
    label,
    name,
    isRequired,
    placeholder,
    value,
    onChange,
    errors,
    t,
}: inputFieldProps) => {
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        onChange(e.target.value)
    }

    const msgErrByName = () => {
        return t(`validation:${errors?.[name]?.type}`, { label: label.toLocaleLowerCase() })
    }

    return (
        <>
            <div className={classNames(className)}>
                <label
                    htmlFor={name}
                    className={classNames(
                        'mb-2 block text-sm font-medium text-white',
                        {
                            hidden: !label,
                            "after:pl-1 after:text-white after:content-['*']": isRequired,
                        },
                        'hover:bg-gradient-to-r',
                    )}
                >
                    {label}
                </label>
                <input
                    type="text"
                    value={value}
                    id={name}
                    placeholder={placeholder}
                    onChange={(e: any) => handleOnChange(e)}
                    className="gradient-border-mask relative h-12 w-full rounded-[10px] border-[1px] border-solid border-gray-1
                 bg-black px-4 py-3 text-white opacity-50 outline-0"
                />
            </div>
            {errors?.[name] && (
                <ErrorMessage
                    errors={errors}
                    name={name}
                    render={() => <div className="text-sm font-light text-red-default">{msgErrByName()}</div>}
                />
            )}
        </>
    )
}

export default InputField
