import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Avatar } from '@nextui-org/avatar'
import Link from 'next/link'
import { apps } from './apps'
import { auth } from '@/auth'

export default async function Home() {
  const session = await auth()

  return (
    <div className="flex gap-6">
      {apps.map(app => (
        <Link key={app.path} href={app.path}>
          <Card as="div" className="w-24" shadow="none" isHoverable isPressable isBlurred>
            <CardBody className="flex justify-center items-center">
              <Avatar className="bg-transparent" src={app.iconPath} name={app.name} />
            </CardBody>
            <CardFooter className="flex justify-center items-center pt-0">
              <span>{app.name}</span>
            </CardFooter>
          </Card>
        </Link>
      ))}
      <Link href={session?.user ? '/setting/profile' : '/api/auth/signin'}>
        <Card as="div" className="w-24" shadow="none" isHoverable isPressable isBlurred>
          <CardBody className="flex justify-center items-center">
            <Avatar src={session?.user?.image ?? ''} name={session?.user?.name ?? 'Guest'} />
          </CardBody>
          <CardFooter className="flex justify-center items-center pt-0">
            <span>{session?.user ? session.user.name : 'Sign in'}</span>
          </CardFooter>
        </Card>
      </Link>
    </div>
  )
}
