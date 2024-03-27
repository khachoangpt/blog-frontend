import { BlogService } from '$/backend'
import { REVALIDATE_DEFAULT, queryTags } from '@/constants'

type GetBlogsQuery = {
	select?: string
	skip?: number
	take?: number
	relations?: string[]
	order?: string[]
}

export const getBlogList = async (query?: GetBlogsQuery) => {
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
