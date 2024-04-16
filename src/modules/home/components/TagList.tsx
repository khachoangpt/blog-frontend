import { getTagList } from '@/actions/tag'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'

const TagList = async () => {
	const { tags } = await getTagList()

	return (
		<Container className="space-x-2 space-y-5">
			<Heading level={2}>Tags</Heading>
			{tags?.map((tag) => (
				<Badge size="large" variant="secondary" key={tag.name}>
					#{tag.name}
				</Badge>
			))}
		</Container>
	)
}

export default TagList
