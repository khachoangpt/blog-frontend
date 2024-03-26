import { BlogService } from '$/backend'
import { REVALIDATE_DEFAULT, queryTags } from '@/constants'
import { useBlogListStore } from '@/store/blog'

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
		useBlogListStore.setState({ blogs: blogs ?? [], total }, true)
		return { blogs: blogs ?? [], total }
	} catch {
		return { error: 'Something wrong when get blog list.' }
	}
}
