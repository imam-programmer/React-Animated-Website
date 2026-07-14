import React from 'react'
import Navbar from '../components/navigation/Navbar'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

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


  gsap.registerPlugin(ScrollTrigger)

useGSAP(function(){
  gsap.from(".hero",{
    height:0,
    stagger:{
      amount:0.5
    },
    scrollTrigger:{
      trigger:".lol",
    start:"top 100%",
    end:"top -140%",
    scrub:true
    }
  })
})









  return (
    <div className='p-4'>
      <div className=' pt-[20vh]'>
        <h2 className='text-[10vw] uppercase'>Projects</h2>
      </div>
      <div className=' -mt-10 lol'>
        {
          projects.map((elem,idx)=>(
 <div key={idx} className='hero w-full  h-[600px] mb-4 flex gap-4'>
            <ProjectCard image1={elem.image1} image2={elem.image2}/>
            </div>
          ))
        }
 
    
      </div>
    </div>
  )
}

export default Projects