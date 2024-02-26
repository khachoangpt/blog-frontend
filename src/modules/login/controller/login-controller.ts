import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { loginSchema } from '@/constants/validation-schemas'

export type LoginParams = {
  email: string
  password: string
}

const useLoginController = () => {
  const loginForm = useForm<LoginParams>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(loginSchema),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = loginForm

  const login: SubmitHandler<LoginParams> = async () => {}

  return { control, handleSubmit, errors, loginForm, login }
}

export default useLoginController
