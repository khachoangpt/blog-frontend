import { TagService } from '$/backend'
import { REVALIDATE_DEFAULT, queryTags } from '@/constants'
import { useTagListStore } from '@/store/tag'

type GetTagsQuery = {
	select?: string
	skip?: number
	take?: number
	relations?: string[]
	order?: string[]
}

export const getTagList = async (query?: GetTagsQuery) => {
	try {
		const { tags, count } = await TagService.getTags({
			...query,
			next: { revalidate: REVALIDATE_DEFAULT, tags: queryTags.tagList() },
		})
		useTagListStore.setState({ tags: tags ?? [], count }, true)
		return { tags: tags ?? [], count: count ?? 0 }
	} catch {
		return { error: 'Something wrong when get tag list.' }
	}
}
