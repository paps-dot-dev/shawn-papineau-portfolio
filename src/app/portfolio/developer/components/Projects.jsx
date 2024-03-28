import { React } from 'react'
import ProjectCard from './ProjectCard'
import supabase from '../../../../../lib/supabase'

async function Projects() {
  let { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .eq('project_category', 1)
    .order('project_completion_date', { ascending: false })

  return (
    <div className='flex lg:flex-row flex-col flex-wrap justify-center items-center '>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Projects
