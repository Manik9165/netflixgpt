import React from 'react'

const VideoTitle = ({title, description}) => {
  return (
    <div className='w-screen aspect-video absolute text-white pt-[20%] px-24 bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='w-6/12 py-10'>{description}</p>
    </div>
  )
}

export default VideoTitle