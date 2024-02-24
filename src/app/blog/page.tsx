import { Suspense } from 'react'

import { getBlogList } from '@/actions/blog/get-blog-list'
import { Container } from '@/components/ui/container'
import BlogItemSkeleton from '@/containers/blog/components/BlogItemSkeleton'
import BlogList from '@/containers/blog/components/BlogList'

const Page = async () => {
  Promise.all([await getBlogList({ order: ['created_at'] })])

  return (
    <Container>
      <Suspense fallback={<BlogItemSkeleton />}>
        <BlogList />
      </Suspense>
    </Container>
  )
}

export default Page
