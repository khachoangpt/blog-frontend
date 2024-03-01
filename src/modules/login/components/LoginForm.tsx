'use client'

import { FormInput } from '@/components/common/form/form-input'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Form, FormField } from '@/components/ui/form'
import useLoginController from '../controller/login-controller'

const LoginForm = () => {
	const { control, loginForm, handleSubmit, handleLogin, isSubmitting } =
		useLoginController()

	return (
		<Form {...loginForm}>
			<Container className="space-y-8">
				<FormField
					control={control}
					name="email"
					render={({ field: { onChange, value } }) => (
						<FormInput onChange={onChange} value={value} label="Email" />
					)}
				/>
				<FormField
					control={control}
					name="password"
					render={({ field: { onChange, value } }) => (
						<FormInput
							onChange={onChange}
							value={value}
							label="Password"
							type="password"
						/>
					)}
				/>
			</Container>
			<Container className="mt-5 flex justify-center">
				<Button
					loading={isSubmitting}
					type="submit"
					onClick={handleSubmit(handleLogin)}
				>
					Login
				</Button>
			</Container>
		</Form>
	)
}

export default LoginForm
