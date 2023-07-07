import classNames from 'classnames'
import { FC, ReactNode } from 'react'

interface IIconButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    rounded?: boolean
    className?: string
}

const IconButton: FC<IIconButton> = ({ children, className, rounded, ...props }) => {
    return (
        <button
            className={classNames(
                className,
                'flex h-10 w-10 cursor-pointer items-center justify-center border border-gray-1 bg-black-1 text-gray-2 transition hover:border-transparent hover:bg-gray-1 hover:text-white',
                {
                    'rounded-full': rounded,
                    'rounded-[10px]': !rounded,
                },
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default IconButton
