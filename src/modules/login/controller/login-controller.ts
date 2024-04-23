import { login } from '@/actions/auth'
import { ErrorMessagesEnum } from '@/client-sdk/backend/enums.gen'
import type { LoginParams } from '@/client-sdk/backend/types.gen'
import { pageList } from '@/constants'
import { loginSchema } from '@/constants/validation-schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

const useLoginController = () => {
	const router = useRouter()
	const t = useTranslations()
	const loginForm = useForm<LoginParams>({
		defaultValues: { email: '', password: '' },
		resolver: zodResolver(loginSchema),
	})
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = loginForm

	/**
	 * Handles the login process.
	 *
	 * @param {LoginParams} data - The login parameters.
	 * @return {Promise<void>} - A promise that resolves when the login process is complete.
	 */
	const handleLogin: SubmitHandler<LoginParams> = async (
		data: LoginParams,
	): Promise<void> => {
		const { error } = await login(data)
		if (error) {
			const errorMessage = getLoginErrorMessage(error)
			toast.error(errorMessage)
			return
		}
		toast.success(t('Login.toast.login-success'))
		router.push(pageList.home.href)
	}

	/**
	 * Generates a login error message based on the given error message.
	 *
	 * @param {string} [error] - The error message.
	 * @return {string} - The login error message.
	 */
	const getLoginErrorMessage = (error?: string): string => {
		switch (error) {
			case ErrorMessagesEnum.CUSTOMER_NOT_FOUND:
				return t('Login.toast.customer-not-found')
			case ErrorMessagesEnum.EMAIL_OR_PASSWORD_INCORRECT:
				return t('Login.toast.email-or-password-incorrect')
			default:
				return t('Common.toast.unknown-error')
		}
	}

	return { control, handleSubmit, errors, loginForm, handleLogin, isSubmitting }
}

export default useLoginController
