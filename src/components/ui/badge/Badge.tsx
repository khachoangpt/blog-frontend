import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'react'
import { badgeVariants } from './variants'

export interface BadgeProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
	return (
		<div
			className={cn(badgeVariants({ variant, size }), className)}
			{...props}
		/>
	)
}

export { Badge, badgeVariants }
