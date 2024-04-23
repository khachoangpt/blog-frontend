import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'
import { Container } from '../container'

function Skeleton({
	className,
	...props
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
	return (
		<Container
			className={cn('animate-pulse rounded-md bg-muted', className)}
			{...props}
		/>
	)
}

export { Skeleton }
