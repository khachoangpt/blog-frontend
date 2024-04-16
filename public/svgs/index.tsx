import type { FC, SVGProps } from 'react'
import { default as InformationCircleSolid } from './information-circle-solid.svg'
import { default as XCircleSolid } from './x-circle-solid.svg'

type Icon = FC<SVGProps<SVGSVGElement>>

export const Icons = {
	InformationCircleSolid: InformationCircleSolid as Icon,
	XCircleSolid: XCircleSolid as Icon,
} as const
