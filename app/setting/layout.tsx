'use client'
import { Listbox, ListboxItem } from '@nextui-org/listbox'

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full">
      <Listbox className="w-64 overflow-auto" aria-label="settings">
        <ListboxItem key="system" href="/setting/system">
          System
        </ListboxItem>
        <ListboxItem key="profile" href="/setting/profile">
          Profile
        </ListboxItem>
      </Listbox>
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}
