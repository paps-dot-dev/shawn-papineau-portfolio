import { React } from 'react'
import ProjectCard from './ProjectCard'
import supabase from '../../../../../lib/supabase'

async function Projects() {
  let { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .range(0, 15)

  const data = projects
  const sortedData = data.sort()
  console.log(sortedData)

  return (
    <div className='flex lg:flex-row flex-col flex-wrap justify-center items-center '>
      {sortedData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Projects
