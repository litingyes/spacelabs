import { Card, CardBody, CardFooter } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import NextImage from 'next/image'
import Link from 'next/link'
import { apps } from './apps'

export default function Home() {
  return (
    <div>
      {apps.map(app => (
        <Link key={app.path} href={app.path}>
          <Card className="w-24" isHoverable isPressable isBlurred>
            <CardBody className="flex justify-center items-center">
              <Image as={NextImage} src={app.iconPath} alt={app.name} width={32} height={32} isZoomed />
            </CardBody>
            <CardFooter className="flex justify-center items-center pt-0">
              <span>{app.name}</span>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
