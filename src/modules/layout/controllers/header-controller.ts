import { logout } from '@/actions/auth/logout'
import { pageList } from '@/constants'
import { useRouter } from 'next/navigation'

const useHeaderController = () => {
	const router = useRouter()

	const handleLogout = async () => {
		await logout()
		router.push(pageList.home.href)
	}

	return {
		handleLogout,
	}
}

export default useHeaderController
