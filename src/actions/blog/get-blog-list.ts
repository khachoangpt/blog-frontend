import { BlogService } from '$/backend'
import { useBlogListStore } from '@/store/blog'
import { unstable_noStore as noStore } from 'next/cache'

type GetBlogsQuery = {
	select?: string
	skip?: number
	take?: number
	relations?: string[]
	order?: string[]
}

export const getBlogList = async (query?: GetBlogsQuery) => {
	noStore()
	try {
		const { blogs, total } = await BlogService.getBlogs(query ?? {})
		useBlogListStore.setState({ blogs: blogs ?? [], total }, true)
		return { blogs: blogs ?? [], total }
	} catch {
		return { error: 'Something wrong when get blog list.' }
	}
}
