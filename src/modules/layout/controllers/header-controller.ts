import { logout } from '@/actions/auth/logout'
import { pageList } from '@/constants'
import { useRouter } from 'next/navigation'

const useHeaderController = () => {
	const router = useRouter()

	/**
	 * Logs the user out by calling the logout function and navigating to the home page.
	 *
	 * @return {Promise<void>} A promise that resolves when the logout and navigation are complete.
	 */
	const handleLogout = async (): Promise<void> => {
		await logout()
		router.push(pageList.home.href)
	}

	return {
		handleLogout,
	}
}

export default useHeaderController
