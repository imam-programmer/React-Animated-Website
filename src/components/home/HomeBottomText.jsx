import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex items-center justify-center gap-3'>
        <Link className='text-[6vw] border-2 border-white rounded-full px-8 uppercase text-white'>Projects</Link>
        <Link className='text-[6vw] border-2 border-white rounded-full px-8 uppercase text-white'>Agence</Link>
    </div>
  )
}

export default HomeBottomText