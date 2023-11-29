'use client'
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
      <Listbox
        className="w-64 overflow-auto"
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
      <div className="flex-1 overflow-auto">
        {children}

      </div>
    </div>
  )
}
