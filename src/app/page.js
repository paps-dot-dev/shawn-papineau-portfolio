import Image from 'next/image'
import headshot from '../../public/headshot.jpeg'
import { FaBeer, FaReact } from 'react-icons/fa'
import {
  SiAdobe,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAngular,
  SiAstro,
  SiFigma,
  SiNextdotjs,
  SiReact,
} from 'react-icons/si'
import ServiceCards from './components/ServiceCards'
import ContactCard from './components/ContactCard'
import HomeTabSection from './components/HomeTabSection'
import CreativeGrid from './components/CreativeGrid'
import Typewriter from './components/Typewriter'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=' min-h-screen py-24 px-4'>
      <div className='flex justify-between items-cente w-screen px-10 font-extralight text-gray-400 text-lg lg:max-w-[1900px] mx-auto'>
        <p>Web Designer</p>
        <p>Web Developer</p>
        <p>Digital Creative</p>
      </div>
      <section className='flex flex-col justify-center items-center pb-24 lg:p-32 p-8 mt-32 max-w-[1200px] mx-auto font-extralight'>
        <h1 className=' text-6xl lg:text-[5em]'>
          Make your next <br></br> <Typewriter /> <br /> a{' '}
          <span className='bg-gradient-to-tr from-indigo-400 to-violet-500 bg-clip-text text-transparent font-medium'>
            creative
          </span>{' '}
          one.
        </h1>
        <p className='mt-2 text-xl font-light '>
          In a world where online presence is paramount, I specialize in
          crafting bespoke solutions tailored to your needs. Whether you're
          dreaming of a sleek website, an immersive web application, or a
          dynamic e-commerce platform, I have the skills and ingenuity to turn
          your ideas into reality.
        </p>
        <Link
          href='/contact'
          className='bg-gradient-to-tr from-purple-900 to-purple-800 p-4 w-full rounded-full mt-4 text-xl font-extralight text-center lg:w-[560px] lg:p-5 lg:mt-12 hover:to-purple-600 duration-200 ease-linear hover:-translate-y-2'>
          Let's Connect!
        </Link>
      </section>
      <section className='mb-32'>
        <div className='flex justify-between flex-wrap items-center text-5xl lg:text-7xl lg:px-32'>
          <SiReact />
          <SiNextdotjs />
          <SiAngular />
          <SiAstro />
          <SiAdobephotoshop />
          <SiFigma />
          <SiAdobepremierepro />
        </div>
      </section>
      <h2 className='text-center text-5xl lg:text-7xl mt-64'>
        Let's build something extraordinary...
        <span className='bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent '>
          together
        </span>
        .
      </h2>
      <p className='text-center text-[7em]'>&#x1F91D;</p>

      <section className='bg-black flex flex-col-reverse md:flex-row items-center justify-center py-22 lg:px-48 mt-16'>
        {/* <div className='rounded-full border-2 border-purple-800 p-2 w-[400px] mb-4'>
          <Image
            className='rounded-full w-full'
            src={headshot}
            alt='picture of Shawn Papineau'
          />
        </div> */}
        <ContactCard headshot={headshot} />
      </section>
      <section className='px-12 mb-32 mt-32 lg:mt-64'>
        <h3 className=' text-5xl  text-center mb-16 lg:text-6xl'>
          {' '}
          See My Work.
        </h3>

        <ServiceCards />
      </section>
      <section>
        <h3 className='text-7xl p-10 text-left lg:text-center font-semibold'>
          <span className='font-extralight'>You Should Hire Me...</span> Here's
          Why.
        </h3>
        <CreativeGrid />
      </section>
    </main>
  )
}
