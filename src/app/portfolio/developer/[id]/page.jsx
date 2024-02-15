import supabase from '../../../../../lib/supabase'

import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export default async function ProjectDetails({ params }) {
  const id = params.id

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', BigInt(id))
    .single()

  // const filter = data.filter((project) => project.id == id)
  // const projects = filter[0]
  console.log(data)
  const projects = data
  return (
    <main>
      <section className='flex justify-between items-start mt-8 mb-8'>
        <h1 className='text-7xl lg:text-8xl font-extralight mt-8 text-center bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent p-2'>
          {projects.project_name}
        </h1>
        <div className='flex justify-center items-center space-x-2 mr-4'>
          <a
            target='_blank'
            href={projects.github_url}
            className='flex items-center justify-start ease-linear duration-100 space-x-4 bg-gradient-to-r from-purple-600 to-indigo-500 text-white w-fit px-4 py-2 rounded-full hover:opacity-20'>
            <FaGithub />
            <span>Github</span>
          </a>
          <a
            target='_blank'
            href={projects.project_url}
            className='flex items-center justify-start space-x-4 duration-100 ease-linear bg-gradient-to-r from-indigo-600 to-purple-500 text-white w-fit px-4 py-2 rounded-full hover:opacity-20'>
            <span>Visit</span>
            <FaExternalLinkAlt />
          </a>
        </div>
      </section>

      <div className='text-gray-300 mb-16 grid grid-cols-3 gap-8 text-xl lg:text-2xl xl:text-3xl text-center font-extralight '>
        <span>{projects.technology_primary}</span>
        <span>{projects.technology_secondary}</span>
        <span>{projects.technology_tertiary}</span>
      </div>
      <img
        src={projects.project_hero}
        className='w-4/5 md:w-1/2 xl:w-1/2 max-w-[750px] mx-auto rounded-xl shadow-white shadow-md ring-2 ring-purple-200'
      />
      <p className='text-white'>{projects.project_details}</p>
    </main>
  )
}
