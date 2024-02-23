import React from 'react'
import ContactCard from '../components/ContactCard'
import headshot from '../../../public/headshot.jpeg'

export default function About() {
  return (
    <main className='flex flex-col items-center lg:flex-row justify-between py-32 px-8 '>
      <ContactCard headshot={headshot} />
      <aside className='w-full lg:w-1/2 bg-white  text-black lg:p-24 rounded-lg'>
        <h3 className='text-4xl font-semibold mb-8'>{`<A Message from the Dev/>`}</h3>

        <p className=' text-xl mb-4'>
          As a seasoned full-stack web developer, I bring a wealth of experience
          and expertise to every project I undertake. With a profound
          understanding of front-end development, back-end development, and
          UI/UX Design, I am passionate about crafting immersive and intuitive
          user experiences that captivate and engage audiences.
        </p>
        <p className=' text-xl mb-4'>
          My approach to development is deeply rooted in user-centric design
          principles—I am constantly exploring new ways to innovate and elevate
          the digital landscape, always keeping the end user at the forefront of
          my mind. Whether it's building interactive interfaces, implementing
          intelligent features, or creating seamless navigation pathways, I
          thrive on the challenge of delivering exceptional digital solutions
          that leave a lasting impression.
        </p>
        <p className=' text-xl mb-4'>
          Beyond my proficiency in front-end development, I also possess a
          robust background in data architecture and analytics. Leveraging this
          expertise, I am adept at optimizing performance, streamlining
          workflows, and harnessing the power of data to drive informed
          decision-making.
        </p>
        <p className=' text-xl mb-4'>
          With a commitment to excellence and a passion for pushing the
          boundaries of what's possible, I look forward to collaborating with
          you to bring your vision to life and deliver exceptional results.
        </p>
      </aside>
    </main>
  )
}
