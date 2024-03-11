import { getTagList } from '@/actions/tag/get-tag-list'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import { useTagListStore } from '@/store/tag'

const TagList = async () => {
	await getTagList()
	const tags = useTagListStore.getState()

	return (
		<Container className="space-x-2 space-y-5">
			<Heading level={2}>Tags</Heading>
			{tags?.tags?.map((tag) => (
				<Badge size="large" variant="secondary" key={tag.name}>
					#{tag.name}
				</Badge>
			))}
		</Container>
	)
}

export default TagList
