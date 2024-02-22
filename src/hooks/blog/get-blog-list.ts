import { unstable_noStore } from 'next/cache'

import { useBlogStore } from '@/store/blog'
import { BlogService } from '$/backend'

type GetBlogsQuery = {
  select?: string
  skip?: number
  take?: number
  relations?: string[]
  order?: string[]
}

export const getBlogList = async (query?: GetBlogsQuery) => {
  unstable_noStore()
  const { blogs, count } = await BlogService.getBlogs(query ?? {})
  useBlogStore.setState(blogs ?? [], true)
  return { blogs: blogs ?? [], count }
}
