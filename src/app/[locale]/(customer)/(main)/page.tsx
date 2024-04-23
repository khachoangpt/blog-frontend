import { Select } from '@/components/common/select'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import {} from '@/components/ui/select'
import BlogList from '@/modules/blog/components/BlogList'
import TagList from '@/modules/home/components/TagList'
import type { SelectOptions } from '@/types'

const languages: SelectOptions[] = [
	{ label: 'English', value: 'en' },
	{ label: 'Vietnamese', value: 'vi' },
	{ label: 'Japanese', value: 'ja' },
	{ label: 'Korean', value: 'ko' },
	{ label: 'Chinese', value: 'zh' },
	{ label: 'French', value: 'fr' },
	{ label: 'German', value: 'de' },
	{ label: 'Spanish', value: 'es' },
	{ label: 'Portuguese', value: 'pt' },
	{ label: 'Russian', value: 'ru' },
	{ label: 'Hindi', value: 'hi' },
	{ label: 'Indonesian', value: 'id' },
	{ label: 'Turkish', value: 'tr' },
	{ label: 'Polish', value: 'pl' },
	{ label: 'Punjabi', value: 'pa' },
	{ label: 'Romanian', value: 'ro' },
	{ label: 'Malay', value: 'ms' },
	{ label: 'Telugu', value: 'te' },
	{ label: 'Bengali', value: 'bn' },
]

export default async function Home() {
	return (
		<main className="m-auto max-w-xl">
			<Select
				options={languages}
				placeholder={<Container>Select language</Container>}
			/>
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
