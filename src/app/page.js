import Image from 'next/image'
import Gallery from '@/components/Gallery'
import { Toaster } from 'react-hot-toast'
export default function Home() {
  return (
    <main className="">
      <Gallery />
      <Toaster />
    </main>
  )
}
