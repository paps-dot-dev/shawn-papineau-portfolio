'use client'
import { Card } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

function ServiceCard({ service }) {
  return (
    <>
      <Link href={service.url_slug}>
        <Card
          className='lg:max-w-lg max-w-[400px] h-[600px] lg:mx-20 shadow-white shadow-lg ring-2 ring-purple-500 hover:opacity-80 hover:bg-opacity-80 duration-150 ease-linear cursor-pointer'
          renderImage={() => (
            <img
              className='max-h-[400px]'
              src={service.thumbnail_url}
              alt='image 1'
            />
          )}>
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {service.project_category}
          </h5>
          <p className='font-normal text-gray-700 dark:text-gray-400'>
            {service.project_category_description}
          </p>
        </Card>
      </Link>
    </>
  )
}

export default ServiceCard
