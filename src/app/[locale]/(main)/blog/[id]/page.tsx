import { getBlogDetail } from '@/actions/blog/get-blog-detail'
import { Container } from '@/components/ui/container'

type PageProps = {
	params: { id: string }
}

const Page = async ({ params }: PageProps) => {
	const [blog] = await Promise.all([await getBlogDetail(params.id)])

	return <Container>{JSON.stringify(blog)}</Container>
}

export default Page
