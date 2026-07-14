import React from 'react'

const ProjectCard = (props) => {
    console.log(props)
  return (
        <div className='w-full  h-[600px] mb-4 flex gap-4 bg-amber-300'>
          <div className='w-1/2 group relative hover:rounded-4xl duration-300 overflow-hidden h-full bg-green-900'>
          <img className='h-full w-full object-cover' src={props.image1} alt="" />
          <div className='opacity-0 group-hover:opacity-100 duration-500 absolute top-0 left-0 flex items-center justify-center bg-black/50 h-full w-full'>
            <h2 className='uppercase text-5xl text-amber-50 py-2 px-5 cursor-pointer border-2 rounded-full'>vior le projet</h2>
          </div>
          </div>
           <div className='w-1/2 group relative hover:rounded-4xl duration-300 overflow-hidden h-full bg-green-900'>
          <img className='h-full w-full object-cover' src={props.image2} alt="" />
          <div className='opacity-0 group-hover:opacity-100 duration-500 absolute top-0 left-0 flex items-center justify-center bg-black/50 h-full w-full'>
            <h2 className='uppercase text-5xl text-amber-50 py-2 px-5 cursor-pointer border-2 rounded-full'>vior le projet</h2>
          </div>
          </div>
          
        </div>
  )
}

export default ProjectCard