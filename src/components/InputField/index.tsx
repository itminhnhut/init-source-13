import classNames from 'classnames'

type inputFieldProps = {
    className?: string
    label: string
}

const inputField = ({ className, label }: inputFieldProps) => {
    return (
        <div className={classNames(className)}>
            <label htmlFor="first_name" className={classNames('block mb-2 text-sm font-medium text-white', { hidden: !label })}>
                {label}
            </label>
            <input
                type="text"
                id="first_name"
                className="w-full px-4 py-3  opacity-50	 text-white h-12 rounded-[10px] border-[1px] border-solid bg-black border-gray-1"
                placeholder="John"
                required
            />
        </div>
    )
}
export default inputField
