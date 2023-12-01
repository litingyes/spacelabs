import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Application',
  description: 'A proving ground for tools',
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col gap-2">
      <Breadcrumb></Breadcrumb>
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}
