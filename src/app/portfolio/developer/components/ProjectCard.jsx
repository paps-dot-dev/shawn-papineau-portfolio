import React from 'react'
import { Card } from 'flowbite-react'
import Link from 'next/link'

function ProjectCard({ project }) {
  return (
    <Link href={`/portfolio/developer/${project.id}`}>
      <Card className='w-[400px] h-[500px] text-black mb-4 hover:-translate-y-4 opacity-50 hover:opacity-100 ease-linear duration-200 '>
        <img src={project.project_hero} className=' rounded-lg ' />
        <div className='flex justify-between items-center'>
          <p>{project.project_name}</p>
          <p className='text-xs'>{project.project_completion_date}</p>
        </div>
        <div>
          <ul className='flex flex-row flex-wrap justify-start items-center text-xs text-white space-x-4'>
            <li className='bg-gradient-to-br from-purple-800 to-indigo-700 rounded-full py-1 px-2'>
              {project.technology_primary}
            </li>
            <li className='bg-gradient-to-br from-purple-800 to-indigo-700 rounded-full py-1 px-2'>
              {project.technology_secondary}
            </li>
            {project.technology_tertiary !== null ? (
              <li className='bg-gradient-to-br from-purple-800 to-indigo-700 rounded-full py-1 px-2'>
                {project.technology_tertiary}
              </li>
            ) : null}
          </ul>
        </div>
      </Card>
    </Link>
  )
}

export default ProjectCard
