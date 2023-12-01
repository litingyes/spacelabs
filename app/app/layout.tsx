import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Application',
  description: 'A proving ground for tools',
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      {children}
    </div>
  )
}
