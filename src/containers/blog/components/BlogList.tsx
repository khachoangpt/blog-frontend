import { Container } from '@/components/ui/container'
import { getBlogList } from '@/hooks/blog/get-blog-list'
import { useBlogStore } from '@/store/blog'

import BlogItem from './BlogItem'

const BlogList = async () => {
  await getBlogList({ order: ['created_at'] })
  const blogs = useBlogStore.getState()

  return (
    <Container className="space-y-6">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </Container>
  )
}

export default BlogList
