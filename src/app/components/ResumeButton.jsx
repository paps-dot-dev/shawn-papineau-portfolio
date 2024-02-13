'use client'
import React, { useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import supabase from '../../../lib/supabase'

export default function ResumeButton() {
  const [resumeUrl, setResumeUrl] = useState(
    'https://iiyjiikbtsckevydbcsj.supabase.co/storage/v1/object/public/website-files/sample.pdf?t=2024-02-13T18%3A41%3A47.125Z'
  )

  const fetchResumeUrl = async () => {
    const { publicUrl, error } = await supabase.storage
      .from('website-files')
      .getPublicUrl('sample.pdf')

    if (error) {
      console.error('Error fetching resume URL:', error.message)
    } else {
      setResumeUrl(publicUrl)
      console.log(resumeUrl)
    }
  }

  const handleDownload = () => {
    if (resumeUrl) {
      window.open(resumeUrl, '_blank')
    } else {
      fetchResumeUrl()
    }
  }
  return (
    <button
      onClick={handleDownload}
      className='flex items-center space-x-2 mt-8 text-blue-400 opacity-65 hover:opacity-100 hover:text-white ease-linear duration-75'>
      <FaDownload />
      <span>Download Resume</span>
    </button>
  )
}
