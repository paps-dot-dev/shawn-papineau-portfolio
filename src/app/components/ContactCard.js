import React from 'react'
import { Card } from 'flowbite-react'
import Image from 'next/image'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { SiGithub, SiInstagram, SiX } from 'react-icons/si'

function ContactCard({ headshot }) {
  return (
    <Card className='max-w-xl  py-16 px-24 bg-gray-950 border-purple-400'>
      <div className='flex flex-col justify-center items-center pb-10'>
        <Image
          alt='Bonnie image'
          src={headshot}
          className='mb-3 rounded-full shadow-lg h-[150px] w-[150px] lg:h-80 lg:w-80 border-2 border-purple-500'
        />

        <h5 className='mb-1 text-2xl font-medium text-gray-200 dark:text-white'>
          Shawn Papineau
        </h5>
        <span className='text-md text-gray-500 dark:text-gray-400'>
          Digital Creative
        </span>
        <div className='mt-4 flex space-x-8 lg:space-x-20 lg:mt-6'>
          <a href='#' className='text-3xl'>
            <SiInstagram />
          </a>
          <a href='#' className='text-3xl'>
            <SiX />
          </a>
          <a href='#' className='text-3xl'>
            <SiGithub />
          </a>
        </div>
        <button className='mt-6 bg-purple-800 p-4 rounded-xl w-full'>
          Contact Me!
        </button>
      </div>
    </Card>
  )
}

export default ContactCard
