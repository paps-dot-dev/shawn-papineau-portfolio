'use client'
import { Card } from 'flowbite-react'
import Image from 'next/image'

import React from 'react'

function ServiceCard({ service }) {
  return (
    <>
      <Card
        className='max-w-sm min-h-[500px]'
        renderImage={() => (
          <img
            width={500}
            height={500}
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
    </>
  )
}

export default ServiceCard
