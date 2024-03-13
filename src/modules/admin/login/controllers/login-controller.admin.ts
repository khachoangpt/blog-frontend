import { useForm } from 'react-hook-form'

const useAdminLoginController = () => {
	const loginAdminForm = useForm()

	return {
		loginAdminForm,
	}
}

export default useAdminLoginController
