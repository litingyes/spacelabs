import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Avatar } from '@nextui-org/avatar'
import Link from 'next/link'
import { apps } from './apps'
import UserCard from '@/components/UserCard'

export default function Home() {
  return (
    <div className="flex gap-6">
      {apps.map(app => (
        <Link key={app.path} href={app.path}>
          <Card className="w-24" shadow="none" isHoverable isPressable isBlurred>
            <CardBody className="flex justify-center items-center">
              <Avatar src={app.iconPath} name={app.name} />
            </CardBody>
            <CardFooter className="flex justify-center items-center pt-0">
              <span>{app.name}</span>
            </CardFooter>
          </Card>
        </Link>
      ))}
      <UserCard />
    </div>
  )
}
