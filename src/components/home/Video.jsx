import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video autoPlay muted loop className='h-full w-full object-cover' src="./homeVideo.mp4">
        </video>
    </div>
  )
}

export default Video