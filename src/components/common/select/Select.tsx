'use client'

import {
	SelectBase,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import type { selectVariants } from '@/components/ui/select/variants'
import { cn } from '@/lib/utils'
import type { SelectOptions } from '@/types'
import type { VariantProps } from 'class-variance-authority'
import type { LegacyRef, ReactNode } from 'react'

type Props = {
	className?: string
	options: SelectOptions[]
	placeholder?: ReactNode
	disabled?: boolean
	onChange?(value: string): void
	value?: string
	ref?: LegacyRef<HTMLButtonElement>
} & Pick<VariantProps<typeof selectVariants>, 'variant'>

export const Select = (props: Props) => {
	const {
		options = [],
		className,
		disabled = false,
		onChange,
		placeholder = '',
		value,
		ref,
		variant,
	} = props

	return (
		<SelectBase disabled={disabled} onValueChange={onChange} value={value}>
			<SelectTrigger className={cn(className)} variant={variant} ref={ref}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent variant={variant}>
				{options.map((option) => (
					<SelectItem key={`option_${option.value}`} value={option.value}>
						{option?.label}
					</SelectItem>
				))}
			</SelectContent>
		</SelectBase>
	)
}
