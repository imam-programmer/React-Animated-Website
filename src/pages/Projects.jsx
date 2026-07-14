import React from 'react'
import Navbar from '../components/navigation/Navbar'
import ProjectCard from '../components/projects/ProjectCard'

const Projects = () => {
  const projects=[
    {
      image1:"./image/navImage1.jpg",
      image2:"./image/navimage2.jpg"
    },
    {
        image1:"./image/navimage3.jpg",
      image2:"./image/navimage4.jpg"
    },
      {
        image2:"./image/navImage1.jpg",
      image1:"./image/navimage4.jpg"
    }
  ]
  return (
    <div className='p-4'>
      <div className=' pt-[30vh]'>
        <h2 className='text-[10vw] uppercase'>Projects</h2>
      </div>
      <div className=' -mt-10'>
        {
          projects.map((elem)=>(

            <ProjectCard image1={elem.image1} image2={elem.image2}/>
          ))
        }
 
    
      </div>
    </div>
  )
}

export default Projects