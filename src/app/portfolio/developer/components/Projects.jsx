import { React } from 'react'
import ProjectCard from './ProjectCard'
import supabase from '../../../../../lib/supabase'

async function Projects() {
  const { data, error } = await supabase.from('projects').select('*')
  const projects = data

  return (
    <div className='flex lg:flex-row flex-col flex-wrap justify-center items-center space-x-4'>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Projects
