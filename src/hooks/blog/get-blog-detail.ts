import { unstable_noStore } from 'next/cache'

import { useBlogDetailStore } from '@/store/blog'
import { BlogService } from '$/backend'

export const getBlogDetail = async (id: string) => {
  unstable_noStore()
  const blog = await BlogService.getBlogDetail({ id })
  useBlogDetailStore.setState(blog ?? null, true)
  return { blog }
}
