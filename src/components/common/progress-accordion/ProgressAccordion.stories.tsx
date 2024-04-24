import { Container } from '@/components/ui/container'
import { Text } from '@/components/ui/text'
import type { Meta, StoryObj } from '@storybook/react'
import { ProgressAccordion } from './ProgressAccordion'

const meta: Meta<typeof ProgressAccordion> = {
	component: ProgressAccordion,
	argTypes: {
		type: {
			options: ['single', 'multiple'],
			control: { type: 'select' },
		},
	},
}

export default meta

type Story = StoryObj<typeof ProgressAccordion>

export const Default: Story = {
	args: {
		type: 'multiple',
		items: [
			{
				value: 'item-1',
				state: 'not-started',
				trigger: 'Item 1',
				content: (
					<Container>
						<Text>Test accordion content line 1</Text>
						<Text>Test accordion content line 2</Text>
						<Text>Test accordion content line 3</Text>
						<Text>Test accordion content line 4</Text>
						<Text>Test accordion content line 5</Text>
					</Container>
				),
			},
			{
				value: 'item-2',
				state: 'in-progress',
				trigger: 'Item 2',
				content: (
					<Container>
						<Text>Test accordion content line 1</Text>
						<Text>Test accordion content line 2</Text>
						<Text>Test accordion content line 3</Text>
						<Text>Test accordion content line 4</Text>
						<Text>Test accordion content line 5</Text>
					</Container>
				),
			},
			{
				value: 'item-3',
				state: 'completed',
				trigger: 'Item 3',
				content: (
					<Container>
						<Text>Test accordion content line 1</Text>
						<Text>Test accordion content line 2</Text>
						<Text>Test accordion content line 3</Text>
						<Text>Test accordion content line 4</Text>
						<Text>Test accordion content line 5</Text>
					</Container>
				),
			},
		],
	},
}
