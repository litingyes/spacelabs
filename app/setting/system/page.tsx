'use client'

import type { Key } from '@react-types/shared'
import { Select, SelectItem } from '@nextui-org/select'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import LayoutItem from '@/components/LayoutItem'

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const { theme, themes, setTheme } = useTheme()
  const [selectedKeys, setSelectedKeys] = useState<Iterable<Key>>(new Set())
  useEffect(() => {
    setSelectedKeys(new Set([theme!]))
    setMounted(true)
  }, [])

  if (!mounted)
    return null

  return (
    <div>
      <LayoutItem
        label="Theme"
        children={(
          <Select label="Select theme" defaultSelectedKeys={selectedKeys} onChange={e => setTheme(e.target.value)}>
            {
              themes.map(item => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))
            }
          </Select>
        )}
      />
    </div>
  )
}
