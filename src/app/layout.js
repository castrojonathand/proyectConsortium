import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ADMMORINIGO',
  description: 'Aplicacion para la administración integral de consorcios',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#EDEDED] text-black' >
      <Navbar/>
      <main className='m-4'>
        {children}
      </main>
      </body>
    </html>
  )
}
