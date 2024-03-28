import { Card } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

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

function Portfolio() {
  return (
    <section className=' container'>
      <h1 className='text-white text-5xl text-center mt-4'>Portfolio</h1>
      <p className='text-center p-2 opacity-50'>
        Select a portfolio below to see my work.
      </p>
      <div className='flex flex-col justify-center items-center  mt-16'>
        <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 justify-center items-center'>
          <Link href={'/portfolio/developer'}>
            <div className='portfolio-link-dev text-white rounded-2xl p-2 text-2xl lg:p-8 lg:text-5xl flex flex-col justify-end hover:opacity-30 ease-linear duration-100 font-semibold w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]'>
              <p>Development</p>
            </div>
          </Link>
          <Link href={'/portfolio/design'}>
            <div className='portfolio-link-design text-white rounded-2xl p-2 text-2xl lg:p-8 lg:text-5xl flex flex-col justify-end hover:opacity-30 ease-linear duration-100 font-semibold w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]'>
              <p>Design</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
