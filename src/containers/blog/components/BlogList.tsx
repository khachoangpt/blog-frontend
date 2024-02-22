import { Container } from '@/components/ui/container'
import { getBlogList } from '@/hooks/blog/get-blog-list'

import BlogItem from './BlogItem'

const BlogList = async () => {
  const { blogs } = await getBlogList({ order: ['created_at'] })

  return (
    <Container className="space-y-6">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </Container>
  )
}

export default BlogList
