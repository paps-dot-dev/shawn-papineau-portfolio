'use client'
import React, { useEffect } from 'react'
import { Navbar, Button, Dropdown } from 'flowbite-react'
import headshot from '../../../public/headshot.jpeg'
import supabase from '../../../lib/supabase'

function Navigation() {
  return (
    <Navbar
      fluid
      rounded
      className='p-8 bg-gradient-to-b from-purple-800 to-indigo-900'>
      <Navbar.Brand href='https://flowbite-react.com'>
        <img
          src='https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/headshot.jpeg'
          className='mr-3 h-8 sm:h-9 rounded-full'
          alt='Web Developer Picture'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Shawn Papineau
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className='text-white' href='/' active>
          Home
        </Navbar.Link>
        <Navbar.Link className='text-white' href='/'>
          About
        </Navbar.Link>
        <Navbar.Link className='text-white' href='/portfolio/developer'>
          Developer Portfolio
        </Navbar.Link>

        <Navbar.Link className='text-white' href='#'>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
