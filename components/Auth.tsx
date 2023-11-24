import { Link } from '@nextui-org/link'

export function SignIn() {
  return (
    <Link href="api/auth/signin">
      Sign In
    </Link>
  )
}

export function SingOut() {
  return (
    <Link href="api/auth/signout">
      Sign Out
    </Link>
  )
}
