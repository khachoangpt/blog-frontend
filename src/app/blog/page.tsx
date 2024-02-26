import { Suspense } from 'react'

import { Container } from '@/components/ui/container'
import BlogItemSkeleton from '@/modules/blog/components/BlogItemSkeleton'
import BlogList from '@/modules/blog/components/BlogList'

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
