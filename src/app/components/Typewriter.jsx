'use client'
import { ReactTyped } from 'react-typed'
export default function Typewriter() {
  return (
    <span className='font-semibold'>
      <ReactTyped
        strings={['_App', '_Project', '_Website', '_Innovation']}
        typeSpeed={100}
        backSpeed={50}
        loop
      />
    </span>
  )
}
