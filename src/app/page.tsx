import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (<div className='flex justify-center items-center'>
    <UserButton />
  </div>)
}
