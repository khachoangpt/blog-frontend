import { BlogService, type GetBlogDetailResponse } from '$/backend'
import { REVALIDATE_DEFAULT, queryTags } from '@/constants'

/**
 * Retrieves the details of a blog by its ID.
 *
 * @param {string} id - The ID of the blog to retrieve
 * @return {Promise<{ blog?: GetBlogDetailResponse; error?: string }>} A promise that resolves to an object containing either the retrieved blog details or an error message
 */
export const getBlogDetail = async (
	id: string,
): Promise<{ blog?: GetBlogDetailResponse; error?: string }> => {
	try {
		const blog = await BlogService.getBlogDetail({
			id,
			cache: {
				revalidate: REVALIDATE_DEFAULT,
				tags: queryTags.blogDetail({ id }),
			},
		})
		return { blog }
	} catch {
		return { error: 'Blog not found' }
	}
}
