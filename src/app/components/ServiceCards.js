'use client'
import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
import supabase from '../../../lib/supabase'

function ServiceCards() {
  const [services, setServices] = useState([])

  const fetchServices = async () => {
    try {
      let { data, error } = await supabase.from('project_category').select('*')
      setServices(data)
    } catch (error) {}
  }

  useEffect(() => {
    fetchServices()
  }, [])

  return (
    <div className='flex lg:flex-row flex-col justify-between items-center max-w-[1920px] lg:space-x-8 space-y-8 mx-auto'>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}

export default ServiceCards
