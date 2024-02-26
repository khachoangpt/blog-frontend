import { getBlogList } from '@/actions/blog/get-blog-list'
import { Container } from '@/components/ui/container'
import { useBlogListStore } from '@/store/blog'

import BlogItem from './BlogItem'

const BlogList = async () => {
  Promise.all([await getBlogList({ order: ['created_at'] })])
  const blogs = useBlogListStore.getState()

  return (
    <Container className="space-y-6">
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </Container>
  )
}

export default BlogList
