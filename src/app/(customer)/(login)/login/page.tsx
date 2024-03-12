import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { Heading } from '@/components/ui/heading'
import LoginForm from '@/modules/login/components/LoginForm'

const Page = () => {
	return (
		<Container className="w-full">
			<Card className="m-auto max-w-[400px]">
				<CardHeader className="text-center">
					<Heading level={1}>Login</Heading>
				</CardHeader>
				<CardContent className="py-5">
					<LoginForm />
				</CardContent>
			</Card>
		</Container>
	)
}

export default Page
