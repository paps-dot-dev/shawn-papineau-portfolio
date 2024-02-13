import React from 'react'
import Projects from './components/Projects'

function DeveloperPortfolio() {
  return (
    <main className='py-16'>
      <h1 className='text-6xl mb-4 p-2'>Creative Visions: Executed.</h1>
      <p className='text-center p-8  lg:max-w-[50%] text-xl font-light shadow-white shadow-md border-2 border-purple-400 mb-32 bg-white text-black w-3/4 rounded-md mx-auto '>
        Check Out Some of the Projects I've worked on:
      </p>

      <Projects />
    </main>
  )
}

export default DeveloperPortfolio
