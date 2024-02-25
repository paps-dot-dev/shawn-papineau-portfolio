import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeModeScript } from 'flowbite-react'
import Navigation from './Layout/Navigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SiteFooter from './Layout/SiteFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shawn Papineau',
  description: 'Freelance Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <ThemeModeScript />
      </head>
      <body className={`bg-black text-white ${inter.className}`}>
        <Navigation />
        <main className='flex flex-col items-center  justify-between lg:py-16 px-8 container mx-auto'>
          {children}
        </main>
        <ToastContainer />
        <SiteFooter />
      </body>
    </html>
  )
}
