import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Avatar } from '@nextui-org/avatar'
import { SignIn } from './Auth'
import { auth } from '@/auth'

export default async function UserCard() {
  const session = await auth()

  return (
    <Card
      className="w-24"
      shadow="none"
      isHoverable
      isPressable
      isBlurred
    >
      <CardBody className="flex justify-center items-center">
        <Avatar name={session?.user?.name ?? 'Guest'} src={session?.user?.image ?? ''} />
      </CardBody>
      <CardFooter className="flex justify-center items-center  pt-0">
        {
          session ? <span>{session.user?.name}</span> : <SignIn />
        }
      </CardFooter>
    </Card>
  )
}
