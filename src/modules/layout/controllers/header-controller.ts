import { pageList } from '@/constants'
import { useRouter } from 'next/navigation'
import { logout } from '../actions/header-actions'

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
