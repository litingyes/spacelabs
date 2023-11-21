'use client'

import type { Key } from '@react-types/shared'
import { Card, CardBody, CardHeader, Select, SelectItem } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Page() {
  const { theme, themes, setTheme } = useTheme()

  const [selectedKeys, setSelectedKeys] = useState<Iterable<Key>>(new Set())
  useEffect(() => {
    setSelectedKeys(new Set([theme!]))
  }, [])

  return (
    <div>
      <Card>
        <CardHeader>
          <label>Theme</label>
        </CardHeader>
        <CardBody>
          <Select label="Select theme" selectedKeys={selectedKeys} onChange={e => setTheme(e.target.value)}>
            {
              themes.map(item => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))
            }
          </Select>
        </CardBody>
      </Card>
    </div>
  )
}
