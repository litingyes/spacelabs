import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Avatar } from '@nextui-org/avatar'
import Link from 'next/link'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { auth } from '@/auth'

const list = [
  {
    label: 'Setting',
    description: 'setting for space labs',
    path: '/setting',
    icon: <Cog6ToothIcon className="w-10 h-10" />,
  },
]

export default async function Home() {
  const session = await auth()

  return (
    <div className="flex gap-6">
      {list.map(item => (
        <Link key={item.path} href={item.path}>
          <Card as="div" className="w-24" shadow="none" isHoverable isPressable isBlurred>
            <CardBody className="flex justify-center items-center">
              {item.icon}
            </CardBody>
            <CardFooter className="flex justify-center items-center pt-0">
              <span>{item.label}</span>
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
