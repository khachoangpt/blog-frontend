import { BlogService } from '$/backend'
import { REVALIDATE_DEFAULT, queryTags } from '@/constants'
import { useBlogDetailStore } from '@/store/blog'

export const getBlogDetail = async (id: string) => {
	try {
		const blog = await BlogService.getBlogDetail({
			id,
			cache: {
				revalidate: REVALIDATE_DEFAULT,
				tags: queryTags.blogDetail({ id }),
			},
		})
		useBlogDetailStore.setState(blog ?? null, true)
		return { blog }
	} catch {
		return { error: 'Blog not found' }
	}
}
