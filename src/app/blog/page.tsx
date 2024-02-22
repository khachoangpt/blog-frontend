import { Suspense } from 'react'

import { Container } from '@/components/ui/container'
import BlogItemSkeleton from '@/containers/blog/components/BlogItemSkeleton'
import BlogList from '@/containers/blog/components/BlogList'

const Page = () => {
  return (
    <Container>
      <Suspense fallback={<BlogItemSkeleton />}>
        <BlogList />
      </Suspense>
    </Container>
  )
}

export default Page
