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

export default function Home() {
  return (
    <main className=' min-h-screen py-24'>
      <div className='flex justify-between items-cente w-screen px-10 font-extralight text-gray-400 text-lg lg:max-w-[1900px] mx-auto'>
        <p>Web Designer</p>
        <p>Web Developer</p>
        <p>Digital Creative</p>
      </div>
      <section className='flex flex-col justify-center items-center pb-24 lg:p-32 p-8 mt-32 max-w-[1200px] mx-auto'>
        <h1 className=' text-6xl lg:text-[5em]'>
          Make your next App a creative one.
        </h1>
        <p className='mt-2 text-xl font-light '>
          In a world where online presence is paramount, I specialize in
          crafting bespoke solutions tailored to your needs. Whether you're
          dreaming of a sleek website, an immersive web application, or a
          dynamic e-commerce platform, I have the skills and ingenuity to turn
          your ideas into reality.
        </p>
        <button className='bg-gradient-to-tr from-purple-900 to-purple-800 p-4 w-full rounded-full mt-4 text-xl font-extralight lg:w-[560px] lg:p-5 lg:mt-12 hover:to-purple-600 duration-200 ease-linear hover:-translate-y-2'>
          Let's Connect!
        </button>
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
      <section className='bg-black flex flex-col md:flex-row items-center justify-between py-24 lg:px-48 lg:py-64'>
        {/* <div className='rounded-full border-2 border-purple-800 p-2 w-[400px] mb-4'>
          <Image
            className='rounded-full w-full'
            src={headshot}
            alt='picture of Shawn Papineau'
          />
        </div> */}
        <ContactCard headshot={headshot} />
        <aside className='w-96'>
          <h2 className='text-5xl font-medium mb-8'>{`<Message from the Dev/>`}</h2>
          <p className='font-extralight text-2xl'>
            My name is Shawn. Here is some random text where I go on and on
            about how great i am and how much experience that I have
          </p>
        </aside>
      </section>
      <section className='px-12 mb-32'>
        <h3 className=''>I Provide Services In: </h3>

        <ServiceCards />
      </section>
      <section>
        <h3 className='text-7xl p-10 text-left'>
          You Should Hire Me. Here's Why.
        </h3>
        <CreativeGrid />
      </section>
      <section className='mt-32'>
        <h4 className='text-7xl text-center'>
          In Case You Need A Few More Reasons to Work with Me.
        </h4>
        <p className='max-w-[1920px] text-center font-light  bg-white rounded-xl py-8 lg:px-64 text-black mx-10 ring-2 ring-purple-500 shadow-white shadow-md mt-10'>
          You want to make sure that you get the most value for your investment.
          I resonate with that. Here are some more ways I can bring incredible
          value to bringing your vision to life.
        </p>
        <HomeTabSection />
      </section>
    </main>
  )
}
