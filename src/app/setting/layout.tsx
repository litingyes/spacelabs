'use client'
import { Listbox, ListboxItem } from '@nextui-org/react'

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex'>
      <Listbox className='w-64' aria-label='settings'>
        <ListboxItem key='profile' href='/setting/profile' shouldHighlightOnFocus>
          Profile
        </ListboxItem>
      </Listbox>
      <div className='flex-1'>
        {children}
      </div>
    </div>
  )
}
