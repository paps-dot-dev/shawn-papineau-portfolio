import { Card } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

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
