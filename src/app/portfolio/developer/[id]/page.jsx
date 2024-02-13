import supabase from '../../../../../lib/supabase'
import { Card } from 'flowbite-react'

export default async function ProjectDetails({ params }) {
  const id = params.id

  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()

  return (
    <main>
      <h1 className='text-7xl lg:text-8xl font-extralight mt-8 text-center bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent p-2'>
        {projects.project_name}
      </h1>
      <div className='text-gray-300 mb-16 grid grid-cols-3 gap-8 text-xl lg:text-2xl xl:text-3xl text-center font-extralight '>
        <span>{projects.technology_primary}</span>
        <span>{projects.technology_secondary}</span>
        <span>{projects.technology_tertiary}</span>
      </div>
      <img
        src={projects.project_hero}
        className='w-4/5 md:w-1/2 xl:w-1/2 max-w-[750px] mx-auto rounded-xl shadow-white shadow-md ring-2 ring-purple-200'
      />
    </main>
  )
}
