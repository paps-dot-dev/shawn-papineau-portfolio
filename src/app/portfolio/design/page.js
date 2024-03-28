import Link from 'next/link'
import React from 'react'
import { FaBackward, FaHammer, FaHardHat } from 'react-icons/fa'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

export default function DesignPortfolio() {
  return (
    <section className=' lg:h-[1080px] text-3xl flex flex-col justify-center items-center my-32 lg:my-0'>
      <div className='flex justify-center items-center'>
        <FaHammer className='text-7xl text-gray-700' />
        <FaHardHat className='text-7xl text-yellow-200' />
      </div>
      <p>Sorry! This page is still under construction! Check back later!</p>
      <div className='flex justify-between items-center w-full text-xl lg:text-3xl  font-light'>
        <Link
          className='mt-16 flex justify-center items-center opacity-50 hover:opacity-100 hover:text-blue-400'
          href={'/'}>
          <MdArrowBack />
          <p>Back to Home</p>
        </Link>

        <Link
          className=' mt-16 flex justify-center items-center opacity-50 hover:opacity-100 hover:text-blue-400'
          href={'/portfolio/developer'}>
          <p>Developer Portfolio</p>
          <MdArrowForward />
        </Link>
      </div>
    </section>
  )
}
