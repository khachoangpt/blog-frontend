import { unstable_noStore as noStore } from 'next/cache'

import { useBlogDetailStore } from '@/store/blog'
import { BlogService } from '$/backend'

export const getBlogDetail = async (id: string) => {
  noStore()
  try {
    const blog = await BlogService.getBlogDetail({ id })
    useBlogDetailStore.setState(blog ?? null, true)
    return { blog }
  } catch (error) {
    return { error: 'Blog not found' }
  }
}
