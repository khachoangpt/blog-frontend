import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import {} from '@/components/ui/select'
import { Text } from '@/components/ui/text'
import BlogList from '@/modules/blog/components/BlogList'
import TagList from '@/modules/home/components/TagList'
import Image from 'next/image'

export default async function Home() {
	return (
		<main className="m-auto max-w-xl">
			<Container className="relative aspect-square rounded-t-3xl overflow-hidden group">
				<Image
					src={`https://picsum.photos/seed/${Math.random() * 1000}/300`}
					alt="logo"
					fill
					className="rounded-3xl z-10 group-hover:-translate-y-1/3 duration-300"
				/>
				<Text className="absolute top-3/4 text-3xl text-center w-full line-clamp-2 opacity-0 group-hover:opacity-100 duration-1000">
					Text text text Text text text Text text text Text text text Text text
					text Text text text Text text text Text text text Text text text Text
					text text Text text text Text text text Text text text Text text text
					Text text text Text text text Text text text Text text text Text text
					text Text text text Text text text Text text text Text text text Text
					text text Text text text Text text text Text text text
				</Text>
			</Container>
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
