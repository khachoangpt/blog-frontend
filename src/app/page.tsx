import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import BlogList from '@/modules/blog/components/BlogList'
import TagList from '@/modules/home/components/TagList'

export default async function Home() {
  return (
    <main className="m-auto max-w-xl">
      <Container>
        <TagList />
        <Container className="mt-20 space-y-4">
          <Heading level={2}>New Blogs</Heading>
          <BlogList />
        </Container>
      </Container>
    </main>
  )
}
