import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video autoPlay muted loop className='h-full w-full object-cover'>
           <source src="../../../public/homeVideo.mp4" type="video/mp4" />
        </video>
    </div>
  )
}

export default Video