'use client'
import { Listbox, ListboxItem } from '@nextui-org/listbox'
import { usePathname } from 'next/navigation'
import { Cog6ToothIcon, UserIcon } from '@heroicons/react/24/outline'

const list = [
  {
    key: 'system',
    label: 'System',
    url: '/setting/system',
    icon: <Cog6ToothIcon className="w-6 h-6" />,
  },
  {
    key: 'profile',
    label: 'Profile',
    url: '/setting/profile',
    icon: <UserIcon className="w-6 h-6" />,
  },
]

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex h-full gap-2">
      <Listbox
        className="w-64 overflow-auto"
        aria-label="settings"
      >
        {
          list.map(item => (
            <ListboxItem key={item.key} href={item.url} startContent={item.icon} className={pathname.includes(item.url) ? '!bg-blue-500 !text-white' : ''}>
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
