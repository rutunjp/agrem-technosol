import Image from 'next/image'
import Navbar from '@/pages/LandingPage'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-gray-50">
      <Navbar/>
    </main>
  )
}
