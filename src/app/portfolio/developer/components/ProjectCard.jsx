import React from 'react'
import { Card } from 'flowbite-react'
import Link from 'next/link'
import { FaGithub, FaImage, FaSadTear } from 'react-icons/fa'

function ProjectCard({ project }) {
  return (
    <Link
      title={`${project.project_details}`}
      href={`/portfolio/developer/${project.id}`}>
      <Card className='mx-4  my-4 w-[400px] h-[500px] text-white hover:-translate-y-4 opacity-50 hover:opacity-100 ease-linear duration-200 bg-gray-600 bg-opacity-50 border-purple-500 hover:shadow-md hover:shadow-white rounded-2xl  '>
        <div className='min-h-[296px] flex flex-col justify-center items-center'>
          {project.project_hero ? (
            <img
              src={project.project_hero}
              width={400}
              className='rounded-lg'
            />
          ) : (
            <div>
              <FaImage className='text-4xl m-auto' />
              <p>No Image Available</p>
            </div>
          )}
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-lg font-semibold'>{project.project_name}</p>
          <p className='text-xs'>{project.project_completion_date}</p>
        </div>
        <div className='mt-auto'>
          <ul className='flex flex-row flex-wrap text-xs justify-end items-baseline text-white space-x-4'>
            <li className='bg-gradient-to-br from-purple-800 to-indigo-700 rounded-full py-1 px-2'>
              {project.technology_primary}
            </li>
            <li className='bg-gradient-to-br from-purple-800 to-indigo-700 rounded-full py-1 px-2'>
              {project.technology_secondary}
            </li>
          </ul>
        </div>
      </Card>
    </Link>
  )
}

export default ProjectCard
