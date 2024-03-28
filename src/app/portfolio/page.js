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
    <section className='text-black'>
      <h1 className='text-white'>Solutions I've Worked On</h1>
      <div className='flex flex-col lg:flex-row justify-center items-center '>
        <Link href={'/portfolio/developer'}>
          <Card className='w-64'>
            <p>Dev</p>
          </Card>
        </Link>
        <Card className='w-64'>
          <p>Design</p>
        </Card>
      </div>
    </section>
  )
}

export default Portfolio
