import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { Container } from '@/components/ui/container'

const BlogItem = () => {
  return (
    <Card className="cursor-pointer pt-6 hover:drop-shadow-2xl">
      <CardContent className="flex gap-x-8">
        <Container className="relative h-40 w-64 flex-none max-md:hidden">
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="#"
            fill
            className="w-full rounded-md"
          />
        </Container>
        <Container className="space-y-4">
          <CardTitle>Title Title Title Title Title Title Title Title</CardTitle>
          <CardDescription className="line-clamp-5 overflow-hidden">
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
            Description Description Description Description Description
          </CardDescription>
        </Container>
      </CardContent>
    </Card>
  )
}

export default BlogItem
