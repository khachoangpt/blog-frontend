import { Container } from '@/components/ui/container'
import { useBlogStore } from '@/store/blog'

import BlogItem from './BlogItem'

const BlogList = async () => {
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
