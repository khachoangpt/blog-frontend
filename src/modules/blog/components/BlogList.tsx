import { getBlogList } from '@/actions/blog/get-blog-list'
import { Container } from '@/components/ui/container'
import BlogItem from './BlogItem'

const BlogList = async () => {
	const { blogs } = await getBlogList()

	return (
		<Container className="space-y-6">
			{blogs?.map((blog) => (
				<BlogItem key={blog.id} blog={blog} />
			))}
		</Container>
	)
}

export default BlogList
