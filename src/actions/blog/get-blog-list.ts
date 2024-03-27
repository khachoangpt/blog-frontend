import { BlogService, type GetListBlogResponse } from '$/backend'
import { REVALIDATE_DEFAULT, queryTags } from '@/constants'

type GetBlogsQuery = {
	select?: string
	skip?: number
	take?: number
	relations?: string[]
	order?: string[]
}

/**
 * Asynchronous function to get a list of blogs.
 *
 * @param {GetBlogsQuery} query - optional query parameters
 * @return {Promise<GetListBlogResponse & { error?: string }>} a promise that resolves to a response object with blogs and total, or an error message
 */
export const getBlogList = async (
	query?: GetBlogsQuery,
): Promise<GetListBlogResponse & { error?: string }> => {
	try {
		const { blogs, total } = await BlogService.getBlogs({
			...query,
			cache: { revalidate: REVALIDATE_DEFAULT, tags: queryTags.blogList() },
		})
		return { blogs: blogs ?? [], total }
	} catch {
		return { error: 'Something wrong when get blog list.' }
	}
}
