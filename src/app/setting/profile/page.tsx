import type { Metadata } from 'next'
import { UserProfile } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: 'User Profile | Setting',
}

export default function Page() {
  return <UserProfile />
}
