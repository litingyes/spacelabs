import { Avatar } from '@nextui-org/avatar'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { auth } from '@/auth'
import LayoutItem from '@/components/LayoutItem'

export default async function Page() {
  const session = await auth()

  return (
    <div className="flex flex-col gap-4">
      {
        session?.user
          ? (
            <>
              <LayoutItem label="Name" children={session.user.name} />
              <LayoutItem label="Email" children={session.user.email} />
              <LayoutItem label="Avatar" children={<Avatar src={session.user.image!} />} />
              <Button
                className="w-32"
                as={Link}
                href="/api/auth/signout"
                color="danger"
                showAnchorIcon
                variant="solid"
              >
                Sign out

              </Button>
            </>
            )
          : (
            <Button
              className="w-32"
              as={Link}
              href="/api/auth/signin"
              color="primary"
              showAnchorIcon
              variant="solid"
            >
              Sign in
            </Button>
            )
      }
    </div>
  )
}
