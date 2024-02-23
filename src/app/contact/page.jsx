'use client'
import React, { useState } from 'react'
import { Label, Textarea, TextInput, Select, Button } from 'flowbite-react'
import supabase from '../../../lib/supabase'
import { MdSmartphone } from 'react-icons/md'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { SiX } from 'react-icons/si'
import Image from 'next/image'
import { toast } from 'react-toastify'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectDetails: '',
    projectCategory: 'Website',
  })

  const handleFormChange = (e) => {
    e.preventDefault()
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      projectDetails: '',
      projectCategory: 'Website',
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const { data, error } = await supabase
      .from('contact_entries')
      .insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          project_description: formData.projectDetails,
          project_category: formData.projectCategory,
        },
      ])
      .select()

    toast(
      ` Hey ${formData.firstName}! Thank you for reaching out to connect! I will get in contact with you as soon as I can!`,
      { theme: 'dark' }
    )
    resetForm()
  }
  return (
    <>
      <h1 className='text-6xl mb-8 bg-gradient-to-br from-purple-400 to-indigo-500 bg-clip-text text-transparent'>
        Let's Get In Touch.
      </h1>
      <div className='flex justify-center items-center space-x-16 text-4xl mb-16'>
        <a
          href='https://instagram.com/shawn.paps'
          className='rounded-full ring-4 ring-purple-500 p-6 hover:bg-white hover:text-black ease-linear duration-200 hover:animate-pulse '>
          <FaInstagram />
        </a>
        <a
          href='https://github.com/paps-dot-dev'
          className='rounded-full ring-4 ring-purple-500 p-6 hover:bg-white hover:text-black ease-linear duration-200 hover:animate-pulse '>
          <FaGithub />
        </a>
        <a
          href='https://x.com/shawn_paps'
          className='rounded-full ring-4 ring-purple-500 p-6 hover:bg-white hover:text-black ease-linear duration-200 hover:animate-pulse '>
          <SiX />
        </a>
      </div>
      <form className='bg-white  rounded-xl w-full max-w-screen-xl px-8 lg:px-16 pb-8'>
        <h1 className='text-black py-8 text-lg lg:text-2xl font-semibold'>
          <img
            className='inline rounded-full mr-4'
            width={64}
            alt='Shawn Papineau '
            src={
              'https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-assets/headshot.jpeg'
            }
          />
          Contact Shawn Papineau:
        </h1>
        <Label htmlFor='firstName'>First Name</Label>
        <TextInput
          id='firstName'
          placeholder='Steve'
          value={formData.firstName}
          onChange={handleFormChange}
        />
        <Label htmlFor='lastName'>Last Name</Label>
        <TextInput
          id='lastName'
          placeholder='Jobs'
          value={formData.lastName}
          onChange={handleFormChange}
        />
        <Label htmlFor='email'>Good Email to Reach You</Label>
        <TextInput
          id='email'
          placeholder='stevejobs@icloud.com'
          value={formData.email}
          onChange={handleFormChange}
        />
        <Label htmlFor='projectDetails' className='text-sm'>
          Tell Me A Bit About Your Project:
        </Label>
        <Select
          onChange={handleFormChange}
          id='projectCategory'
          value={formData.projectCategory}
          className='mb-2'>
          <option value='Website'>Web Development</option>
          <option value='Web Application'>Web Application</option>
          <option value='UX Design'>UI/UX Design</option>
          <option value='Job Opportunity'>I want to hire you!</option>
        </Select>
        <Textarea
          id='projectDetails'
          placeholder='A sentence or two about the project...'
          value={formData.projectDetails}
          required
          rows={4}
          onChange={handleFormChange}
        />
        <div className='flex justify-end items-center mt-4 space-x-2'>
          <Button onClick={handleSubmit} color='purple'>
            Submit
          </Button>
        </div>
      </form>
    </>
  )
}
