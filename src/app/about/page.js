import React from 'react'
import ContactCard from '../components/ContactCard'
import headshot from '../../../public/headshot.jpeg'

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

export default function About() {
  return (
    <main className='flex justify-center items-center flex-col lg:flex-row lg:space-x-16'>
      <section className=' lg:w-1/2 bg-gray-700 bg-opacity-50 text-gray-200   lg:p-24 rounded-2xl mt-8 mb-8 p-10'>
        <h3 className='text-4xl font-semibold mb-8'>{`<A Message from the Dev/>`}</h3>

        <p className=' lg:text-xl mb-4 font-light'>
          Hello! My name is Shawn! I am a developer & digital creative. I bring
          a wealth of experience and expertise to every project I undertake.
          With a profound understanding of{' '}
          <span className='bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent font-semibold'>
            Front-End & Back-End Development, and UI/UX Design
          </span>{' '}
          , I am <i>passionate</i> about crafting immersive and intuitive user
          experiences that captivate and engage audiences.
        </p>
        <p className=' lg:text-xl mb-4 font-light'>
          My approach to development is deeply rooted in user-centric design
          principles—I am constantly exploring new ways to innovate and elevate
          the digital landscape, always keeping the end user at the forefront of
          my mind. Whether it's building interactive interfaces, implementing
          intelligent features, or creating seamless navigation pathways, I
          thrive on the challenge of delivering exceptional digital solutions
          that leave a lasting impression.
        </p>
        <p className=' lg:text-xl mb-4 font-light'>
          Beyond my proficiency in front-end development, I also possess a
          robust background in data architecture and analytics. Leveraging this
          expertise, I am adept at optimizing performance, streamlining
          workflows, and harnessing the power of data to drive informed
          decision-making.
        </p>
        <p className=' text-xl mb-4 font-light'>
          With a commitment to excellence and a passion for pushing the
          boundaries of what's possible, I look forward to collaborating with
          you to bring your vision to life and deliver exceptional results.
        </p>
      </section>
      <ContactCard headshot={headshot} />
    </main>
  )
}
