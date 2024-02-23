import Image from 'next/image'
import headshot from '../../public/headshot.jpeg'
import {
  FaAngleDoubleDown,
  FaBeer,
  FaChevronDown,
  FaReact,
} from 'react-icons/fa'
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

import Typewriter from './components/Typewriter'
import Link from 'next/link'
import Carousel from './components/Carousel'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'

export default function Home() {
  return (
    <div className=''>
      <div className='flex justify-between items-center w-screen px-10 font-extralight text-gray-400 text-lg lg:max-w-[1900px] mx-auto'>
        <p>Web Designer</p>
        <p>Web Developer</p>
        <p>Digital Creative</p>
      </div>
      <section className='flex flex-col justify-center items-center pb-24 lg:p-32 p-8 mt-32  mx-auto font-extralight max-w-screen-sm lg:max-w-screen-2xl '>
        <h1 className=' text-6xl lg:text-[5em]'>
          Make your next <br></br> <Typewriter /> <br /> a{' '}
          <span className='bg-gradient-to-tr from-indigo-400 to-violet-500 bg-clip-text text-transparent font-medium'>
            creative
          </span>{' '}
          one.
        </h1>
        <p className=' lg:mx-auto lg:text-xl font-light max-w-md mt-8 lg:max-w-screen-lg '>
          In a world where online presence is paramount, I specialize in
          crafting bespoke solutions tailored to your needs. Whether you're
          dreaming of a sleek website, an immersive web application, or a
          dynamic e-commerce platform, I have the skills and ingenuity to turn
          your ideas into reality.
        </p>
        <Link
          href='/contact'
          className='bg-gradient-to-tr from-purple-900 to-purple-800 p-4 w-1/2 rounded-full mt-4 text-xl font-extralight text-center lg:w-[560px] lg:p-5 lg:mt-12 hover:to-purple-600 duration-200 ease-linear hover:-translate-y-2'>
          Let's Connect!
        </Link>
      </section>
      <section className='mb-8'>
        <div className='flex justify-center space-x-5 lg:justify-between flex-wrap items-center text-5xl lg:text-7xl lg:px-32'>
          <SiReact />
          <SiNextdotjs />
          <SiAngular />
          <SiAstro />
          <SiAdobephotoshop />
          <SiFigma />
          <SiAdobepremierepro />
        </div>
      </section>
      <div className='flex flex-col justify-center items-center text-4xl font-extralight animate-pulse text-gray-400'>
        <p className='text-xs'>Scroll Down</p>
        <MdKeyboardDoubleArrowDown />
      </div>
      <section>
        <h2 className='text-center text-4xl lg:text-7xl mt-64'>
          Let's build something extraordinary...
          <span className='bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent '>
            together
          </span>
          .
        </h2>
        <p className='text-center text-[7em]'>&#x1F91D;</p>
      </section>

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
        <h1 className=' text-5xl  text-center mb-16 lg:text-6xl'>
          {' '}
          See My Work.
        </h1>

        <ServiceCards />
      </section>
      <section>
        <h1 className='lg:text-7xl w-3/4 lg:w-full p-16 mx-auto text-5xl text-center font-semibold'>
          <span className='font-extralight'>You Should Hire Me...</span> Here's
          Why.
        </h1>
        <article className='flex flex-col lg:flex-row justify-center items-center py-24 max-w-screen-2xl'>
          <div className='flex flex-col justify-center items-center mx-10'>
            <h2 className='text-6xl font-semibold bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent p-2'>
              Talking Tech.
            </h2>
            <div className='p-16'>
              <Carousel />
            </div>
          </div>
          <p className='lg:text-2xl font-light w-1/2 text-lg'>
            With experience in both front-end and back-end development, and User
            Experience Design (UX), I am equipped with a comprehensive
            understanding of the technical aspects of digital product
            development, allowing me to seamlessly bridge the gap between design
            and implementation.
            <br></br>
            <br />
            My dual expertise in development and design enables me to not only
            conceptualize innovative user experiences but also to execute them
            effectively, ensuring alignment with your user needs and technical
            requirements alike.
          </p>
        </article>
        <article className='flex justify-center items-center flex-col lg:flex-row-reverse max-w-screen-2xl mt-32 mx-auto'>
          <div className='flex flex-col justify-center items-center w-full'>
            <h2 className='text-5xl w-1/2 lg:text-6xl p-2 font-semibold bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent  '>
              Innovating with Others.
            </h2>
            <div className=' flex flex-row-wrap justify-between items-center space-x-8 mt-8'>
              <img
                className='w-32'
                src='https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/noble-2.webp'
                alt='Noble Hauling Macomb'
              />
              <img
                className='w-32 '
                src='https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/ADR%20A2.png'
                alt='Affordable Dumpster Rental'
              />
              <img
                className='w-32 '
                src='https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/DeadWingRecordings-04.png'
                alt='Dead Wing Recordings'
              />
            </div>

            <Link
              className='text-center mt-4 text-lg text-blue-500 hover:ring-2 hover:ring-blue-400 p-2 rounded-md ease-linear hover:text-white duration-200'
              href={'/contact'}>
              Want To See Your Company Here?
            </Link>
          </div>
          <div className='flex flex-col items-center space-y-4 mt-16'>
            <p className='text-lg lg:text-2xl max-w-sm lg:max-w-screen-2xl '>
              I have had the pleasure of collaborating with businesses of all
              different sizes.
            </p>
            <Link
              className='text-2xl bg-purple-800 p-4 w-full rounded-full text-center hover:bg-gray-300 hover:text-purple-800 duration-150 ease-linear'
              href={'/contact'}>
              Let's Chat!
            </Link>
          </div>
        </article>
      </section>
      <section className=' mx-auto text-center mt-80'>
        <Link
          href={'/portfolio/developer'}
          className='text-4xl  mt-80 text-blue-500 font-semibold opacity-50 hover:opacity-100'>
          Still Not Convinced?
        </Link>
      </section>
    </div>
  )
}
