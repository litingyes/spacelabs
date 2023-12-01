'use client'

import { useMemo, useState } from 'react'
import { getColors } from 'theme-colors'
import LayoutItem from '@/components/LayoutItem'

export default function Page() {
  const [color, setColor] = useState<string>('#000000')

  const shades = useMemo(() => getColors(color), [color])

  return (
    <div className="flex flex-col gap-6">
      <LayoutItem label="Theme Color">
        <div className="flex items-center gap-2">
          <input value={color} type="color" onChange={e => setColor(e.target.value)} />
          <span>{color}</span>
        </div>
      </LayoutItem>
      <LayoutItem label="Theme Color Shades">
        <ul className="flex flex-col">
          {Object.entries(shades).map(([shade, color]) => (
            <li key={shade} className="flex items-center gap-4">
              <div className="w-10">{shade}</div>
              <div className="w-20">{color}</div>
              <div className="w-28 h-6" style={{ background: color }} />
            </li>
          ))}
        </ul>
      </LayoutItem>
    </div>
  )
}
