import { Suspense } from 'react'

import BlogItemSkeleton from '@/containers/blog/components/BlogItemSkeleton'
import BlogList from '@/containers/blog/components/BlogList'

export default async function Home() {
  return (
    <main className="m-auto max-w-xl">
      <Suspense key="sus1" fallback={<BlogItemSkeleton />}>
        <BlogList />
      </Suspense>
    </main>
  )
}
