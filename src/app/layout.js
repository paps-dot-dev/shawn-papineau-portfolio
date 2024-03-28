import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeModeScript } from 'flowbite-react'
import Navigation from './Layout/Navigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SiteFooter from './Layout/SiteFooter'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Shawn Papineau',
    default: 'Shawn Papineau: Web Developer',
  },
  description: {
    default:
      'Shawn Papineau is a Web Developer and creative professional located in Plant City, Florida offering Web Development, Design, Marketing, and Data services.',
  },
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'freelance',
    'web developer',
    'software developer',
    'developer for hire',
    'tech consulting',
    'technology consulting',
    'freelance developer',
    'plant city',
    'IT plant city',
    'IT Central Florida',
    'lakeland developer',
    'developer near me',
  ],
  authors: [{ name: 'Shawn Papineau' }],
  creator: 'Shawn Papineau',
  publisher: 'Shawn Papineau',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Shawn Papineau: Web Developer',
    description:
      'Freelance Web Developer and Creative Professional located in Central Florida',
    siteName: 'Shawn Papineau: Remote Freelance Web Developer',
    images: [
      {
        url: 'https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/dev-thumbnail.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Shawn Papineau | Freelance Developer',
      description:
        'Freelance Developer and Creative Professional located in Central Florida.',
    },
  },
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
