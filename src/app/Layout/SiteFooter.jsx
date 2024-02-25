'use client'

import { Footer } from 'flowbite-react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { SiX } from 'react-icons/si'

function SiteFooter() {
  return (
    <Footer
      container
      className='bg-black text-white lg:sticky lg:bottom-0 z-10'>
      <div className='w-full text-center '>
        <div className='w-full justify-between sm:flex sm:items-center sm:justify-between'>
          <Footer.Brand
            href='https://github.com/paps-dot-dev'
            src='https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/headshot.jpeg'
            alt='Picture of Web Developer, Shawn Papineau'
            name='Shawn Papineau'
          />
          <Footer.LinkGroup className='lg:pl-32 mb-4 text-xl lg:text-2xl'>
            <Footer.Link
              target='_blank'
              href='https://instagram.com/shawn.paps'>
              <FaInstagram />
            </Footer.Link>
            <Footer.Link target='_blank' href='https://github.com/paps-dot-dev'>
              <FaGithub />
            </Footer.Link>
            <Footer.Link target='_blank' href='https://x.com/shawn_paps'>
              <SiX />
            </Footer.Link>
          </Footer.LinkGroup>
          <Footer.LinkGroup>
            <Footer.Link href='/about'>About</Footer.Link>
            <Footer.Link href='/portfolio/developer'>See My Work</Footer.Link>
            <Footer.Link href='/contact'>Contact Me</Footer.Link>
            <Footer.Link href='https://github.com/paps-dot-dev'>
              Github Profile
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href='#' by='Shawn Papineau' year={2024} />
      </div>
    </Footer>
  )
}
export default SiteFooter
