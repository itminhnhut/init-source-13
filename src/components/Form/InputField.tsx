import { ChangeEvent, useMemo } from 'react'

import { ErrorMessage } from "@hookform/error-message";


import classNames from 'classnames'

import { styled } from 'styled-components'

type inputFieldProps = {
    t?: any
    name: string,
    className?: string
    label: string
    isRequired?: boolean
    placeholder?: string
    value?: string | number
    ref?: any
    errors?: any
    onChange: (data: any) => void
}


const InputField = ({ className, label, name, isRequired, placeholder, value, onChange, ref, errors, t }: inputFieldProps) => {

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
                    className={classNames('mb-2 block text-sm font-medium text-white', {
                        hidden: !label,
                        "after:pl-1 after:text-white after:content-['*']": isRequired,
                    }, 'hover:bg-gradient-to-r')}
                >
                    {label}
                </label>
                <StyledInputWrapper
                    ref={ref}
                    type="text"
                    value={value}
                    id={name}
                    placeholder={placeholder}
                    onChange={(e: any) => handleOnChange(e)}
                    className="relative h-12 w-full rounded-[10px] bg-black px-4 py-3 border-solid
                 text-white opacity-50 outline-0 gradient-border-mask border-[1px] border-gray-1"
                />
            </div>
            {errors?.[name] &&
                <ErrorMessage
                    errors={errors}
                    name={name}
                    render={() => <div className='text-sm font-light text-red-default'>{msgErrByName()}</div>}
                />
            }
        </>
    )
}

InputField.defaultProps = {
    placeholder: 'Enter',
}

const StyledInputWrapper = styled.input``

export default InputField
