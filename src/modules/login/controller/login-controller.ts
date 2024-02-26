import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { pageList } from '@/constants'
import { loginSchema } from '@/constants/validation-schemas'
import { LoginParams } from '$/backend'

import { login } from '../actions/login-actions'

const useLoginController = () => {
  const router = useRouter()
  const loginForm = useForm<LoginParams>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(loginSchema),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = loginForm

  const handleLogin: SubmitHandler<LoginParams> = async (data) => {
    const { loginDTO, error } = await login(data)
    if (!!loginDTO) {
      toast.success('Login success')
      router.push(pageList.home.href)
    }
    !!error && toast.error(error)
  }

  return { control, handleSubmit, errors, loginForm, handleLogin }
}

export default useLoginController
