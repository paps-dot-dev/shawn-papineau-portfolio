'use client'
import React from 'react'
import { Tabs } from 'flowbite-react'
import {
  HiAdjustments,
  HiClipboardList,
  HiStar,
  HiUserCircle,
} from 'react-icons/hi'
import { MdDashboard } from 'react-icons/md'

function HomeTabSection() {
  return (
    <Tabs
      className='mx-auto lg:space-x-64 mt-16 space-x-8'
      aria-label='Tabs with icons'>
      <Tabs.Item active title='Testimonials' icon={HiStar}>
        This is{' '}
        <span className='font-medium text-gray-800 dark:text-white'>
          Profile tab's associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
      <Tabs.Item title='Snapshots of Projects' icon={MdDashboard}>
        This is{' '}
        <span className='font-medium text-gray-800 dark:text-white'>
          Dashboard tab's associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
      <Tabs.Item title='Skills' icon={HiAdjustments}>
        This is{' '}
        <span className='font-medium text-gray-800 dark:text-white'>
          Settings tab's associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
    </Tabs>
  )
}

export default HomeTabSection
