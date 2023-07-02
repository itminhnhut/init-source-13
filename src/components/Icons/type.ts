import { SVGProps } from 'react'

export interface SVGTypes extends SVGProps<SVGElement> {
    size?: number
    fill?: string
    width?: number
    weight?: number
}
