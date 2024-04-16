import type { LoginParams } from '$/backend'
import { login } from '@/actions/auth'
import { pageList } from '@/constants'
import { loginSchema } from '@/constants/validation-schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

const useLoginController = () => {
	const router = useRouter()
	const loginForm = useForm<LoginParams>({
		defaultValues: { email: '', password: '' },
		resolver: zodResolver(loginSchema),
	})

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = loginForm

	const handleLogin: SubmitHandler<LoginParams> = async (data) => {
		const { loginResponse, error } = await login(data)
		if (loginResponse) {
			toast.success('Login success')
			router.push(pageList.home.href)
			return
		}
		!!error && toast.error(error)
	}

	return { control, handleSubmit, errors, loginForm, handleLogin, isSubmitting }
}

export default useLoginController
