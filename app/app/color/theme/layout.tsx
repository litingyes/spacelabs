'use client'

import { usePathname } from 'next/navigation'
import { Tab, Tabs } from '@nextui-org/tabs'

export default function AppColorThemeLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div>
      <div className="flex justify-center">
        <Tabs selectedKey={pathname} color="primary" size="lg" radius="md" aria-label="Color Theme Tabs">
          <Tab key="/app/color/theme/play" href="/app/color/theme/play" title="Play" />
          <Tab key="/app/color/theme/preset" href="/app/color/theme/preset" title="Preset" />
        </Tabs>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
