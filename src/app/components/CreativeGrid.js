import React from 'react'
import { Button, Card, Tooltip } from 'flowbite-react'
import { FaReact } from 'react-icons/fa'
import {
  SiAmazonaws,
  SiFirebase,
  SiMicrosoftazure,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiVite,
} from 'react-icons/si'
import Link from 'next/link'

function CreativeGrid() {
  return (
    <div className='grid grid-rows-6 grid-cols-1 lg:grid-cols-2  gap-4 p-4 text-black'>
      <Card className='col-span-1 row-span-2 text-lg text-black text-center ring-2 ring-purple-400 shadow-white shadow-lg '>
        <p className='text-2xl font-extralight'>
          Two Words:{' '}
          <span className=' text-2xl bg-gradient-to-r from-purple-800 to-indigo-700 bg-clip-text text-transparent font-semibold'>
            Full. Stack.
          </span>
        </p>
        <p className='text-left'>
          Front-end. Back-end. Design. Databases. I have extensive professional
          experience in all of these facets, making me a jack-of-all-trades that
          can take your project to the next level.
        </p>
      </Card>
      <Card className='col-span-1 row-span-6'>
        <p className='text-4xl'>
          Business Solutions - <span className='text-6xl'>Big</span> &{' '}
          <span className='font-light text-md'>small</span>
        </p>
        <p> I have proudly & professionally innovated with these companies:</p>
        <div className=' grid grid-cols-3 p-20 grid-rows-1 items-center'>
          <img
            className='col-span-1 p-4 '
            src='https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/noble-2.webp'
            alt='Noble Hauling Macomb'
          />
          <img
            className='col-span-2 p-4  '
            src='https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/ADR%20A2.png'
            alt='Affordable Dumpster Rental'
          />
          <img
            className='col-span-3 p-4  '
            src='https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/DeadWingRecordings-04.png'
            alt='Dead Wing Recordings'
          />
        </div>
        <Link
          href={'/contact'}
          className='p-6 font-medium bg-gradient-to-br from-purple-600 to-blue-600 text-center text-white rounded-lg hover:opacity-50 hover:-translate-y-1 duration-100 ease-linear hover:shadow-inner'>
          Want to see your company here?
        </Link>
      </Card>
      <Card className='col-span-1 row-span-4'>
        {' '}
        <p className='bg-gradient-to-r from-purple-500 to-blue-600 text-transparent bg-clip-text text-4xl lg:text-5xl font-bold'>
          Specialized
        </p>
        <p className='text-xl'>
          I am{' '}
          <i className=' font-bold bg-gradient-to-r from-purple-800 to-indigo-700 text-transparent bg-clip-text text'>
            really
          </i>{' '}
          good with these technologies:
        </p>
        <div className='flex flex-wrap justify-between items-center text-5xl'>
          <Tooltip content='Microsoft Azure + SQL Databases'>
            <SiMicrosoftazure />
          </Tooltip>
          <Tooltip content='React.js'>
            <SiReact />
          </Tooltip>
          <Tooltip content='Supabase + PostGres SQL'>
            <SiSupabase />
          </Tooltip>
          <Tooltip content='Firebase + Google Cloud Platform'>
            <SiFirebase />
          </Tooltip>
          <Tooltip content='AWS'>
            <SiAmazonaws />
          </Tooltip>
          <Tooltip content='Next.js'>
            <SiNextdotjs />
          </Tooltip>
          <Tooltip content='Vite'>
            <SiVite />
          </Tooltip>
        </div>
      </Card>
    </div>
  )
}

export default CreativeGrid
