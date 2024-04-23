import { cva } from 'class-variance-authority'

export const selectVariants = cva(
	[
		'flex h-10 w-full items-center justify-between rounded-md border border-input bg-base px-3 py-2',
		'text-sm ring-offset-base placeholder:text-muted-foreground focus:outline-none focus:ring-2',
		'focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
	],
	{
		variants: {
			variant: {
				block:
					'rounded-2xl focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:rounded-b-none data-[state=open]:border-b-transparent',
			},
		},
		defaultVariants: { variant: 'block' },
	},
)

export const selectContentVariants = cva(
	[
		'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
	],
	{
		variants: {
			variant: {
				block:
					'rounded-2xl rounded-t-none data-[side=bottom]:-translate-y-[1px] border-t-0 bg-base data-[state=open]:zoom-in-0 w-[var(--radix-select-trigger-width)]',
			},
		},
		defaultVariants: { variant: 'block' },
	},
)

export const selectItemVariants = cva([
	'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
	'focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
])
