import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import {
	SelectBase,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import BlogList from '@/modules/blog/components/BlogList'
import TagList from '@/modules/home/components/TagList'

export default async function Home() {
	return (
		<main className="m-auto max-w-xl">
			<SelectBase>
				<SelectTrigger className="rounded-2xl focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:rounded-b-none data-[state=open]:border-b-0">
					<SelectValue />
				</SelectTrigger>
				<SelectContent className="rounded-2xl rounded-t-none data-[side=bottom]:translate-y-0 border-t-0 bg-base data-[state=open]:zoom-in-0 w-[var(--radix-select-trigger-width)]">
					{[
						{ label: 'English English', value: 'en' },
						{ label: 'Vietnamese Vietnamese', value: 'vi' },
					].map((item) => (
						<SelectItem
							className="rounded-xl"
							key={item.value}
							value={item.value}
						>
							{item.label}
						</SelectItem>
					))}
				</SelectContent>
			</SelectBase>
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
