import classNames from 'classnames'

type inputFieldProps = {
    className?: string
    label: string
    isRequired?: boolean
    placeholder?: string
}

const inputField = ({ className, label, isRequired, placeholder }: inputFieldProps) => {
    return (
        <div className={classNames(className)}>
            <label
                htmlFor="first_name"
                className={classNames('mb-2 block text-sm font-medium text-white', {
                    hidden: !label,
                    "after:pl-1 after:text-white after:content-['*']": isRequired,
                })}
            >
                {label}
            </label>
            <input
                required
                type="text"
                id="first_name"
                placeholder={placeholder}
                className="border-[1px]border-solid	 h-12 w-full rounded-[10px] border-gray-1 bg-black px-4 py-3 text-white opacity-50 outline-0"
            />
        </div>
    )
}

inputField.defaultProps = {
    placeholder: 'Enter',
}

export default inputField
