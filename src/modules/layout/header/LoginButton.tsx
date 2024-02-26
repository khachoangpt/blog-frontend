import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { pageList } from '@/constants'

const LoginButton = () => {
  return (
    <Link href={pageList.login.href}>
      <Button>Login</Button>
    </Link>
  )
}

export default LoginButton
