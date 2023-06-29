import classNames from 'classnames'
import { styled } from 'styled-components'

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
            {/* <StyledInputWrapper className="relative"> */}
            <StyledInputWrapper
                required
                type="text"
                id="first_name"
                placeholder={placeholder}
                className="relative h-12 w-full rounded-[10px] bg-black px-4 py-3 text-white opacity-50 outline-0"
            />
            {/* </StyledInputWrapper> */}
        </div>
    )
}

inputField.defaultProps = {
    placeholder: 'Enter',
}

const StyledInputWrapper = styled.input`
   
`

export default inputField
