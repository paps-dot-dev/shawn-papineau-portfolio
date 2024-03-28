'use client'
import React from 'react'
import supabase from '../../../lib/supabase'
import Image from 'next/image'

export default async function CompanyCards() {
  let { data: companies, error } = await supabase.from('companies').select('*')

  return (
    <div className='flex flex-row justify-between items-center w-full m-auto mt-8'>
      {companies.map((company) => (
        <img key={company.id} width={144} src={company.logo_url} />
      ))}
    </div>
  )
}
