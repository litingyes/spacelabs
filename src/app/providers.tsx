'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { ThemeProvider } from 'next-themes'
import { dark } from '@clerk/themes'
import { useState } from 'react'
import { useMount, useMutationObserver } from 'ahooks'

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const [isDark, setIsDark] = useState(false)

  useMutationObserver(() => {
    if (document.documentElement.classList.contains('dark'))
      setIsDark(true)
    else
      setIsDark(false)
  }, document.documentElement, {
    attributeFilter: ['class'],
  })

  useMount(() => {
    if (!document.documentElement.classList.contains('dark'))
      setIsDark(false)
  })

  return (
    <ClerkProvider appearance={{ baseTheme: isDark ? dark : undefined }}>
      <NextUIProvider navigate={router.push}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </NextUIProvider>
    </ClerkProvider>
  )
}
