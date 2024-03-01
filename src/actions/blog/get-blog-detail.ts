import { BlogService } from '$/backend'
import { useBlogDetailStore } from '@/store/blog'
import { unstable_noStore as noStore } from 'next/cache'

export const getBlogDetail = async (id: string) => {
	noStore()
	try {
		const blog = await BlogService.getBlogDetail({ id })
		useBlogDetailStore.setState(blog ?? null, true)
		return { blog }
	} catch {
		return { error: 'Blog not found' }
	}
}
