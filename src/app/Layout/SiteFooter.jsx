'use client'

import { Footer } from 'flowbite-react'

function SiteFooter() {
  return (
    <Footer container className='bg-black text-white'>
      <div className='w-full text-center '>
        <div className='w-full justify-between sm:flex sm:items-center sm:justify-between'>
          <Footer.Brand
            href='https://flowbite.com'
            src='https://flowbite.com/docs/images/logo.svg'
            alt='Flowbite Logo'
            name='Shawn Papineau'
          />
          <Footer.LinkGroup>
            <Footer.Link href='#'>About</Footer.Link>
            <Footer.Link href='#'>Privacy Policy</Footer.Link>
            <Footer.Link href='#'>Licensing</Footer.Link>
            <Footer.Link href='#'>Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href='#' by='Shawn Papineau' year={2024} />
      </div>
    </Footer>
  )
}
export default SiteFooter
