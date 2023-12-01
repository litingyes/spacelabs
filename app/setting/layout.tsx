'use client'
import { Card } from '@nextui-org/card'
import { Listbox, ListboxItem } from '@nextui-org/listbox'
import { usePathname } from 'next/navigation'
import { Cog6ToothIcon, UserIcon } from '@heroicons/react/24/outline'
import Breadcrumb from '@/components/Breadcrumb'

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
    <div className="h-full flex flex-col gap-2">
      <Breadcrumb />
      <div className="flex flex-1 gap-6">
        <Card className="w-64 overflow-auto p-2" shadow="sm" isHoverable>
          <Listbox
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
        </Card>
        <Card className="flex-1 overflow-auto px-4 py-2" shadow="lg" isHoverable>
          {children}
        </Card>
      </div>
    </div>

  )
}
