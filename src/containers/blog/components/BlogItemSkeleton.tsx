import { Container } from '@/components/ui/container'
import { Skeleton } from '@/components/ui/skeleton/Skeleton'

const BlogItemSkeleton = () => {
  return (
    <Container className="flex gap-x-8 rounded-md border p-6">
      <Skeleton className="h-40 w-64 flex-none max-md:hidden" />
      <Container className="flex-1 space-y-4">
        <Skeleton className="p-5" />
        <Container className="space-y-3">
          <Skeleton className="p-2" />
          <Skeleton className="p-2" />
          <Skeleton className="p-2" />
          <Skeleton className="p-2" />
        </Container>
      </Container>
    </Container>
  )
}

export default BlogItemSkeleton
