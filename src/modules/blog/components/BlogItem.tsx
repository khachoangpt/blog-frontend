import type { Blog } from '$/backend'
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
	blog: Blog
}

const BlogItem = ({ blog }: Props) => {
	return (
		<Link href={`/blog/${blog.id}`} className="block">
			<Card className="cursor-pointer pt-6 hover:drop-shadow-2xl">
				<CardContent className="flex gap-x-8">
					<Container className="relative h-40 w-64 flex-none rounded-md bg-gray-100 max-md:hidden">
						<Image
							src={blog.thumbnail ?? '/#'}
							alt={blog.title ?? ''}
							fill
							className="w-full rounded-md"
						/>
					</Container>
					<Container className="space-y-4">
						<CardTitle>{blog.title}</CardTitle>
						<CardDescription className="line-clamp-5 overflow-hidden">
							{blog.summary}
						</CardDescription>
					</Container>
				</CardContent>
			</Card>
		</Link>
	)
}

export default BlogItem
