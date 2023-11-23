'use client'

import { Card, CardBody } from '@nextui-org/card'
import { Image } from '@nextui-org/image'
import { useClickAway, useFocusWithin } from 'ahooks'
import NextImage from 'next/image'
import { useRef, useState } from 'react'
import { Link } from '@nextui-org/react'

export default function FixedBall() {
  const arrowSeparatePath = '/svg/arrowSeparate.svg'
  const arrowUnionPath = '/svg/arrowUnion.svg'

  const [isActive, setIsActive] = useState(false)
  const fixedBall = useRef(null)
  useFocusWithin(fixedBall, {
    onFocus() {
      setIsActive(true)
    },
  })
  useClickAway(() => {
    setIsActive(false)
  }, fixedBall)

  return (
    <div className="fixed right-8 bottom-8 ">
      <Card ref={fixedBall} className="rounded-full" isPressable>
        <CardBody>
          <Image as={NextImage} src={isActive ? arrowUnionPath : arrowSeparatePath} width={32} height={32} alt="Fixed Ball" priority />
        </CardBody>
      </Card>
      {
        isActive
          ? (
            <Card className="absolute -left-14 top-1 rounded-full">
              <CardBody>
                <Link href="/">
                  <Image
                    as={NextImage}
                    src="/svg/home.svg"
                    width={24}
                    height={24}
                    alt="Fixed Ball"
                  />
                </Link>
              </CardBody>
            </Card>
            )
          : null
      }
    </div>

  )
}
