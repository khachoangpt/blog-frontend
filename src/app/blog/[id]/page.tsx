import { getBlogDetail } from '@/actions/blog/get-blog-detail'
import { Container } from '@/components/ui/container'
import { useBlogDetailStore } from '@/store/blog'

type PageProps = {
  params: { id: string }
}

const Page = async ({ params }: PageProps) => {
  Promise.all([await getBlogDetail(params.id)])
  const blog = useBlogDetailStore.getState()

  return <Container>{JSON.stringify(blog)}</Container>
}

export default Page
