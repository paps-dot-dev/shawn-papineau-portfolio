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
  })

  function onCloseModal() {
    setOpenModal(false)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      projectDetails: '',
      projectCategory: 1,
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
          project_category_id: formData.projectCategory,
        },
      ])
      .select()
    onCloseModal()

    toast(
      'Thank you for reaching out to connect! I will get in contact with you as soon as I can!',
      { theme: 'dark' }
    )
  }

  return (
    <Card className='max-w-xl  pt-8 px-24 bg-gray-950 border-purple-400'>
      <div className='flex flex-col justify-center items-center pb-10'>
        <Image
          alt='Bonnie image'
          src={headshot}
          className='mb-3 rounded-full shadow-lg h-[150px] w-[150px] lg:h-80 lg:w-80 border-2 border-purple-500'
        />

        <h5 className='mb-1 text-2xl font-medium text-gray-200 dark:text-white'>
          Shawn Papineau
        </h5>
        <span className='text-md text-gray-500 dark:text-gray-400'>
          Digital Creative
        </span>
        <div className='mt-4 flex space-x-8 lg:space-x-20 lg:mt-6'>
          <a href='#' className='text-3xl'>
            <SiInstagram />
          </a>
          <a href='#' className='text-3xl'>
            <SiX />
          </a>
          <a href='#' className='text-3xl'>
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
                placeholder='downwithscully@icloud.com'
                value={formData.email}
                onChange={handleFormChange}
              />
              <Label htmlFor='projectDetails' className='text-sm'>
                Tell Me A Bit About Your Project:
              </Label>
              <Select
                onChange={handleFormChange}
                id='projectCategory'
                value={formData.projectCategory}>
                <option value={1}>Web Development</option>
                <option value={3}>Web Design</option>
                <option value={2}>Digital Media</option>
              </Select>
              <Textarea
                id='projectDetails'
                placeholder='Just a sentence or two about the project...'
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
