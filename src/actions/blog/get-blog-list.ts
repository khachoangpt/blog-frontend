import { unstable_noStore as noStore } from 'next/cache'

import { useBlogListStore } from '@/store/blog'
import { BlogService } from '$/backend'

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
  } catch (error) {
    return { error: 'Something wrong when get blog list.' }
  }
}
