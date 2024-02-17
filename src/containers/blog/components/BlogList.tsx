import { Container } from '@/components/ui/container'

import BlogItem from './BlogItem'

const BlogList = async () => {
  return (
    <Container className="space-y-6">
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </Container>
  )
}

export default BlogList
