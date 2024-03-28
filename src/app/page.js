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
import CompanyCards from './components/CompanyCards'
import { Button } from 'flowbite-react'

export default function Home() {
  return (
    <div className=''>
      <div className='flex justify-between items-center w-screen lg:px-10 px-4 text-sm font-extralight text-gray-400 lg:text-lg lg:max-w-[1900px] mx-auto'>
        <p>Web Designer</p>
        <p>Web Developer</p>
        <p>Digital Creative</p>
      </div>
      <section className='flex flex-col justify-center items-center pb-24 lg:p-32 p-8 lg:mt-32 mt-8 mx-auto font-extralight max-w-screen-sm lg:max-w-screen-2xl '>
        <h1 className=' text-5xl lg:text-[5em]'>
          Make your next <br></br> <Typewriter /> <br /> a{' '}
          <span className='bg-gradient-to-tr from-indigo-400 to-violet-500 bg-clip-text text-transparent font-medium'>
            creative
          </span>{' '}
          one.
        </h1>
        <p className=' lg:mx-auto lg:text-xl font-light w-screen text-sm text-center p-2 lg:p-0 mt-2 lg:mt-8 lg:max-w-screen-lg '>
          In a world where online presence is paramount, I specialize in
          crafting bespoke solutions tailored to your needs. Whether you're
          dreaming of a sleek website, an immersive web application, or a
          dynamic e-commerce platform, I have the skills and ingenuity to turn
          your ideas into reality.
        </p>
        <div className='flex justify-center items-center space-x-4 mt-8'>
          <Link
            href='/contact'
            className='bg-gradient-to-tr from-purple-900 to-purple-700 p-4 rounded-lg mt-4 text-md font-extralight text-center  hover:to-purple-600 duration-100 ease-linear hover:opacity-40 lg:px-24'>
            Let's Connect!
          </Link>
          <Link
            className='bg-gradient-to-tr from-purple-400 to-blue-400 bg-clip-text text-transparent p-4 rounded-lg mt-4 text-md font-bold border-2 border-purple-400 text-center  hover:to-purple-600 duration-100 ease-linear hover:opacity-40 lg:px-24'
            href={'/portfolio'}>
            See My Work
          </Link>
        </div>
      </section>

      <div className='flex flex-col justify-center items-center text-4xl font-extralight animate-pulse text-gray-400'>
        <p className='text-xs'>Scroll Down</p>
        <MdKeyboardDoubleArrowDown />
      </div>
      <section>
        <h2 className='text-center text-4xl lg:text-5xl mt-32'>
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
      <section className='px-12 mb-32 mt-32'>
        <h1 className=' text-5xl  text-center mb-16 lg:text-6xl'>
          {' '}
          See My Work.
        </h1>

        <ServiceCards />
      </section>
      <section>
        <h1 className='lg:text-7xl w-3/4 lg:w-full p-16 mx-auto text-5xl text-center'>
          At Your Service from Design to Deployment.
        </h1>
        <article className='flex flex-col lg:flex-row justify-center items-center py-24 max-w-screen-2xl'>
          <div className='flex flex-col justify-center items-center mx-10'>
            <div className='px-16'>
              <Carousel />
            </div>
          </div>
          <div>
            <h2 className='text-4xl font-semibold bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent p-2'>
              Jack-of-All Trades Tech Professional.
            </h2>
            <p className='text-xl font-light'>
              With experience in both front-end and back-end development, and
              User Experience Design (UX), I am equipped with a comprehensive
              understanding of the technical aspects of digital product
              development, allowing me to seamlessly bridge the gap between
              design and implementation.
              <br></br>
              <br />
              My dual expertise in development and design enables me to not only
              conceptualize innovative user experiences but also to execute them
              effectively, ensuring alignment with your user needs and technical
              requirements alike.
            </p>
          </div>
        </article>
        <article className='max-w-screen-lg flex flex-col justify-center items-center text-center m-auto'>
          <p className='text-3xl lg:text-5xl text-center font-extralight'>
            Trusted by these Awesome Businesses.
          </p>
          <CompanyCards />
          <Link
            href={'/contact'}
            className='mx-auto mt-4 p-4 w-full bg-purple-700 rounded-xl ease-linear duration-100 hover:bg-opacity-40'>
            Want to See Your Business Here?
          </Link>
        </article>
      </section>
      <section className=' mx-auto text-center mt-80'>
        <Link
          href={'/portfolio'}
          className='text-4xl  mt-80 text-blue-500 font-semibold opacity-50 hover:opacity-100'>
          Still Not Convinced? Check Out My Work Here.
        </Link>
      </section>
    </div>
  )
}
