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
      <body className={inter.className}>
        <Navigation />
        {children}
        <ToastContainer />
        <SiteFooter />
      </body>
    </html>
  )
}
