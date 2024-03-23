import { AlertBase, AlertDescription, AlertTitle } from '@/components/ui/alert'
import type { alertVariants } from '@/components/ui/alert/variants'
import type { VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'
import { InformationCircleSolidIcon, XCircleSolidIcon } from '#/svgs'

type Props = {
	title: string
	description?: ReactNode
} & VariantProps<typeof alertVariants>

export const Alert = ({ title, description, variant }: Props) => {
	return (
		<AlertBase variant={variant}>
			<AlertIcon variant={variant} />
			<AlertTitle>{title}</AlertTitle>
			{description && <AlertDescription>{description}</AlertDescription>}
		</AlertBase>
	)
}

const AlertIcon = ({ variant }: VariantProps<typeof alertVariants>) => {
	switch (variant) {
		case 'default':
			return <InformationCircleSolidIcon />
		case 'destructive':
			return <XCircleSolidIcon />
		default:
			return <InformationCircleSolidIcon />
	}
}
