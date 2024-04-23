import { type GetTagListResponse, TagService } from '@/client-sdk/backend'
import { REVALIDATE_DEFAULT, queryTags } from '@/constants'

type GetTagsQuery = {
	select?: string
	skip?: number
	take?: number
	relations?: string[]
	order?: string[]
}

/**
 * Asynchronously retrieves a list of tags based on the provided query.
 *
 * @param {GetTagsQuery} query - optional query parameters
 * @return {Promise<GetTagListResponse & { error?: string }>} a promise that resolves with the list of tags and count, or an error message
 */
export const getTagList = async (
	query?: GetTagsQuery,
): Promise<GetTagListResponse & { error?: string }> => {
	try {
		const { tags, count } = await TagService.getTags({
			...query,
			cache: { revalidate: REVALIDATE_DEFAULT, tags: queryTags.tag.list() },
		})
		return { tags: tags ?? [], count: count ?? 0 }
	} catch {
		return { error: 'Something wrong when get tag list.' }
	}
}
