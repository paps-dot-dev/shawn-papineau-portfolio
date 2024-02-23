'use client'
import { useState } from 'react'
import React from 'react'
import {
  Card,
  Modal,
  TextInput,
  Button,
  Label,
  Dropdown,
  Select,
  Textarea,
} from 'flowbite-react'
import Image from 'next/image'
import { FaDownload, FaInstagram, FaTwitter } from 'react-icons/fa'
import { SiGithub, SiInstagram, SiX } from 'react-icons/si'
import supabase from '../../../lib/supabase'
import { toast } from 'react-toastify'
import ResumeButton from './ResumeButton'

function ContactCard({ headshot }) {
  const [openModal, setOpenModal] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectDetails: '',
    projectCategory: 'Website',
  })

  function onCloseModal() {
    setOpenModal(false)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      projectDetails: '',
      projectCategory: 'Website',
    })
  }

  const handleFormChange = (e) => {
    e.preventDefault()
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
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
    onCloseModal()

    toast(
      `Hey ${formData.firstName}! Thank you for reaching out to connect! I will get in contact with you as soon as I can!`,
      { theme: 'dark' }
    )
  }

  return (
    <Card className='max-w-xl  pt-8 px-24 bg-gray-950 border-purple-400'>
      <div className='flex flex-col justify-center items-center pb-10'>
        <Image
          alt='Bonnie image'
          src={headshot}
          className='mb-3 rounded-full shadow-lg h-[200px] w-[200px] lg:h-80 lg:w-80 border-2 border-purple-500'
        />

        <h5 className='mb-1 text-2xl font-medium text-gray-200 dark:text-white'>
          Shawn Papineau
        </h5>
        <div className='text-xs text-gray-500 dark:text-gray-400'>
          Full Stack Developer | Data Engineer | Digital Creative
        </div>
        <div className='flex space-x-8 lg:space-x-20 lg:mt-16 lg:mb-16 my-8'>
          <a
            href='https://instagram.com/shawn.paps'
            target='_blank'
            className='text-4xl opacity-50 hover:text-purple-400 hover:animate-pulse hover:opacity-100 ease-linear duration-100 hover:-translate-y-1 '>
            <SiInstagram />
          </a>
          <a
            href='https://x.com/shawn_paps'
            target='_blank'
            className='text-4xl opacity-50 hover:text-purple-400 hover:animate-pulse hover:opacity-100 ease-linear duration-100 hover:-translate-y-1'>
            <SiX />
          </a>
          <a
            href='https://github.com/paps-dot-dev'
            target='_blank'
            className='text-4xl opacity-50 hover:text-purple-400 hover:animate-pulse hover:opacity-100 ease-linear duration-100 hover:-translate-y-1'>
            <SiGithub />
          </a>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className='mt-6 bg-purple-800 p-4 rounded-xl w-full'>
          Contact Me
        </button>
        <ResumeButton />
        <Modal show={openModal} size='md' onClose={onCloseModal} popup>
          <Modal.Header className='p-4'>
            <Image className='w-24 rounded-full' src={headshot} />
            <p className='mx-auto'>Get In Touch With Shawn!</p>
          </Modal.Header>
          <Modal.Body>
            <form>
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
                <Button onClick={onCloseModal} color='gray'>
                  Cancel
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </Card>
  )
}

export default ContactCard
