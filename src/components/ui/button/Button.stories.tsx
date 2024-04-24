import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
	component: Button,
	argTypes: {
		variant: {
			options: ['base', 'danger', 'neutral', 'transparent'],
			control: { type: 'select' },
		},
		size: {
			options: ['default', 'sm', 'lg', 'icon'],
			control: { type: 'select' },
		},
	},
}

export default meta

type Story = StoryObj<typeof Button>

export const Base: Story = {
	args: {
		children: 'Button',
		disabled: false,
		loading: false,
	},
}
