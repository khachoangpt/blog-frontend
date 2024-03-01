'use client'

import {
	SelectBase,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import type { SelectOptions } from '@/types'

type Props = {
	className?: string
	options: SelectOptions[]
	placeholder?: string
	disabled?: boolean
	onChange?(value: string): void
	value?: string
}

export const Select = ({
	className,
	options = [],
	placeholder = '',
	disabled = false,
	onChange,
	value,
}: Props) => {
	return (
		<SelectBase disabled={disabled} onValueChange={onChange} value={value}>
			<SelectTrigger className={cn(className)}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{options.map((option) => (
					<SelectItem key={`option_${option.value}`} value={option.value}>
						{option?.label}
					</SelectItem>
				))}
			</SelectContent>
		</SelectBase>
	)
}
