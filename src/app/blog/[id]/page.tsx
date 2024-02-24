import { Container } from '@/components/ui/container'
import { getBlogDetail } from '@/hooks/blog/get-blog-detail'
import { useBlogDetailStore } from '@/store/blog'

const Page = async ({ params }: { params: { id: string } }) => {
  await getBlogDetail(params.id)
  const blog = useBlogDetailStore.getState()
  return <Container>{JSON.stringify(blog)}</Container>
}

export default Page
