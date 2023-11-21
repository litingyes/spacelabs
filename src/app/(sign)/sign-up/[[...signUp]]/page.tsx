import type { Metadata } from 'next'
import { SignUp } from '@clerk/nextjs'

export const metadata: Metadata = {
  description: 'Sign Up',
}

export default function Page() {
  return <SignUp />
}
