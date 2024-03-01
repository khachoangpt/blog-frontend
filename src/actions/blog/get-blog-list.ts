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
		const { blogs, count } = await BlogService.getBlogs(query ?? {})
		useBlogListStore.setState(blogs ?? [], true)
		return { blogs: blogs ?? [], count: count ?? 0 }
	} catch {
		return { error: 'Something wrong when get blog list.' }
	}
}
