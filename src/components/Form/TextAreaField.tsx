import { ChangeEvent } from 'react'

import classNames from 'classnames'
import { styled } from 'styled-components'

type textareaFieldProps = {
    className?: string
    label: string
    placeholder?: string
    rows?: number
    value?: string
    ref?: any
    onChange: (data: any) => void
}

const MAXIMUM_LENGTH = 120

const TextAreaField = ({ className, label, placeholder, rows, value, onChange }: textareaFieldProps) => {
    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target
        let parseValue = value
        if (value.length > MAXIMUM_LENGTH) parseValue = value.slice(0, MAXIMUM_LENGTH)
        onChange(parseValue)
    }

    return (
        <div className={classNames(className)}>
            <label
                htmlFor="first_name"
                className={classNames('mb-2 block w-full text-sm font-medium text-white', {
                    hidden: !label,
                })}
            >
                {label}
            </label>
            <StyledTextArea
                value={value}
                onChange={(e: any) => handleOnChange(e)}
                placeholder={placeholder}
                rows={rows}
                className="border-[1px]border-solid	 w-full rounded-[10px] border-gray-1 bg-black px-4 py-3 text-white opacity-50 outline-0"
            />
            <div className="mt-1 flex justify-end text-sm text-gray-2">
                {value?.length}/{MAXIMUM_LENGTH}
            </div>
        </div>
    )
}

TextAreaField.defaultProps = {
    placeholder: 'Enter',
}

const StyledTextArea = styled.textarea`
    &::-webkit-resizer {
    }
`

export default TextAreaField
