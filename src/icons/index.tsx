import { SVGAttributes } from 'react'

export interface IconProps extends SVGAttributes<SVGElement> {
    color?: string;
    size: string | number;
    fill?: string;
}

export { default as IconLogo } from './icon_logo'

