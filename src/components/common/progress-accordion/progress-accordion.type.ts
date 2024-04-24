import type { accordionTriggerVariants } from '@/components/ui/accordion/variants'
import type { VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'

export type ProgressAccordionItem = {
	value: string
	trigger: ReactNode
	content: ReactNode
} & Pick<VariantProps<typeof accordionTriggerVariants>, 'state'>
