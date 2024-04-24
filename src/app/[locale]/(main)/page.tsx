import {
	ProgressAccordion,
	type ProgressAccordionItem,
} from '@/components/common/progress-accordion'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import {} from '@/components/ui/select'
import BlogList from '@/modules/blog/components/BlogList'
import TagList from '@/modules/home/components/TagList'

export default async function Home() {
	const progressAccordionItems: ProgressAccordionItem[] = [
		{
			value: 'item-1',
			trigger: 'Accordion 1',
			content: 'Content of accordion 1',
			state: 'not-started',
		},
		{
			value: 'item-2',
			trigger: 'Accordion 2',
			content: 'Content of accordion 2',
			state: 'in-progress',
		},
		{
			value: 'item-3',
			trigger: 'Accordion 3',
			content: 'Content of accordion 3',
			state: 'completed',
		},
	]

	return (
		<main className="m-auto max-w-xl">
			<ProgressAccordion type="multiple" items={progressAccordionItems} />
			<Container>
				<TagList />
				<Container className="mt-20 space-y-4">
					<Heading level={2}>New Blogs</Heading>
					<BlogList />
				</Container>
			</Container>
		</main>
	)
}
