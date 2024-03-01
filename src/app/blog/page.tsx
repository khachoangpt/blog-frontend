import { Container } from '@/components/ui/container'
import BlogItemSkeleton from '@/modules/blog/components/BlogItemSkeleton'
import BlogList from '@/modules/blog/components/BlogList'
import { Suspense } from 'react'

const Page = async () => {
	return (
		<Container>
			<Suspense fallback={<BlogItemSkeleton />}>
				<BlogList />
			</Suspense>
		</Container>
	)
}

export default Page
