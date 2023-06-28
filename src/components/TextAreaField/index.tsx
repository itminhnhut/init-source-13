import { ReactNode } from 'react'

import classNames from 'classnames'

type textareaFieldProps = {
    className?: string
    label: string
    placeholder?: string
    rows?: number
}

const TextAreaField = ({ className, label, placeholder, rows }: textareaFieldProps) => {
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
            <textarea
                placeholder={placeholder}
                rows={rows}
                className="border-[1px]border-solid	 w-full rounded-[10px] border-gray-1 bg-black px-4 py-3 text-white opacity-50 outline-0"
            />
        </div>
    )
}

TextAreaField.defaultProps = {
    placeholder: 'Enter',
}

export default TextAreaField
