'use client'
import { useState, useEffect, React } from 'react'
import ProjectCard from './ProjectCard'
import supabase from '../../../../../lib/supabase'

function Projects() {
  const [projects, setProjects] = useState([])
  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase.from('projects').select('*')
      setProjects(data)
      console.log(data)
    } catch (error) {}
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <div className='flex lg:flex-row flex-wrap justify-center items-center space-x-4 space-y-4'>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Projects
