'use client'
import { Listbox, ListboxItem } from '@nextui-org/react'

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full">
      <Listbox className="w-64 overflow-auto" aria-label="settings">
        <ListboxItem key="profile" href="/setting/profile" shouldHighlightOnFocus>
          Profile
        </ListboxItem>
        <ListboxItem key="system" href="/setting/system" shouldHighlightOnFocus>
          System
        </ListboxItem>
      </Listbox>
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}
