import React from 'react'
import Projects from './components/Projects'
import Link from 'next/link'
import {
  MdArrowBack,
  MdArrowBackIosNew,
  MdOutlineArrowLeft,
} from 'react-icons/md'
import { Tooltip } from 'flowbite-react'

function DeveloperPortfolio() {
  return (
    <main className='py-8'>
      <Link className='text-5xl text-gray-200 ' href={'/'}>
        <Tooltip content='Back to Home'>
          <MdArrowBack className='opacity-40 hover:animate-pulse hover:opacity-100' />
        </Tooltip>
      </Link>
      <h1 className='text-6xl mb-4 p-2 bg-gradient-to-br from-purple-700 to-blue-400 bg-clip-text text-transparent text-center'>
        Creative Visions: Executed.
      </h1>
      <p className='text-center p-8  lg:max-w-[50%] text-xl font-light shadow-white shadow-sm border-2 border-purple-400 mb-32 text-white w-3/4 rounded-md mx-auto '>
        Check Out Some of the Projects I've worked on:
      </p>

      <Projects />
    </main>
  )
}

export default DeveloperPortfolio
