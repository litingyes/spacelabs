import { Card } from '@nextui-org/card'
import Image from 'next/image'
import Link from 'next/link'
import { apps } from './apps'

export default function Home() {
  return (
    <div className="p-8">
      {apps.map(app => (
        <Link key={app.path} href={app.path}>
          <Card className="h-12 w-12" isHoverable isPressable>
            <Image src={app.iconPath} alt={app.name} width={64} height={64} />
          </Card>
        </Link>
      ))}
    </div>
  )
}
