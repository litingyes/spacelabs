'use client'
import { Card } from '@nextui-org/card'
import { Listbox, ListboxItem } from '@nextui-org/listbox'
import { usePathname } from 'next/navigation'

const list = [
  {
    key: 'theme',
    label: 'Theme',
    url: '/app/color/theme',
  },
]

export default function AppColorLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex h-full gap-6">
      <Card className="w-64 overflow-auto p-2 h-full">
        <Listbox
          aria-label="settings"
        >
          {
          list.map(item => (
            <ListboxItem key={item.key} href={item.url} className={pathname.includes(item.url) ? '!bg-blue-500 !text-white' : ''}>
              {item.label}
            </ListboxItem>
          ))
        }
        </Listbox>
      </Card>

      <Card className="flex-1 overflow-auto px-4 py-2 h-full">
        {children}
      </Card>
    </div>
  )
}
