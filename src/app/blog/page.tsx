import { Container } from '@/components/ui/container'
import BlogList from '@/containers/blog/components/BlogList'
import { getBlogList } from '@/hooks/blog/get-blog-list'

const Page = async () => {
  await getBlogList({ order: ['created_at'] })

  return (
    <Container>
      <BlogList />
    </Container>
  )
}

export default Page
