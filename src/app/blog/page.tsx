import { Suspense } from 'react'

import { Container } from '@/components/ui/container'
import BlogItemSkeleton from '@/containers/blog/components/BlogItemSkeleton'
import BlogList from '@/containers/blog/components/BlogList'
import { getBlogList } from '@/hooks/blog/get-blog-list'

const Page = async () => {
  await getBlogList({ order: ['created_at'] })

  return (
    <Container>
      <Suspense fallback={<BlogItemSkeleton />}>
        <BlogList />
      </Suspense>
    </Container>
  )
}

export default Page
