'use client'
import React, { useEffect } from 'react'
import { Navbar, Button, Dropdown } from 'flowbite-react'
import headshot from '../../../public/headshot.jpeg'
import supabase from '../../../lib/supabase'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Navigation() {
  const router = useRouter()
  return (
    <Navbar
      fluid
      rounded
      className='p-8 bg-gradient-to-b from-purple-800 to-indigo-900'>
      <Navbar.Brand href='/'>
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
        <Button
          onClick={() => router.push('/contact')}
          className='hidden lg:block'
          color='light'>
          Contact Me!
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          href={'/'}
          className='text-sm font-light hover:bg-white hover:bg-opacity-25 p-2 rounded-md hover:font-semibold ease-linear duration-75  text-gray-500 hover:text-white'>
          Home
        </Link>
        <Link
          href={'/portfolio/developer'}
          className='text-sm font-light hover:bg-white hover:bg-opacity-25 p-2 rounded-md hover:font-semibold duration-75 ease-linear  text-gray-500 hover:text-white'>
          Portfolio
        </Link>
        <Link
          href={'/about'}
          className='text-sm font-light hover:bg-white hover:bg-opacity-25 p-2 rounded-md hover:font-semibold duration-75 ease-linear  text-gray-500 hover:text-white'>
          About
        </Link>
        <Link
          href={'/contact'}
          className='text-sm font-light hover:bg-white hover:bg-opacity-25 p-2 rounded-md hover:font-semibold duration-75 ease-linear  text-gray-500 hover:text-white'>
          Contact
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
