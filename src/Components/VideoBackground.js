import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer';


const VideoBackground = ({ id }) => {

  useMovieTrailer(id);

  const movieTrailer = useSelector(store => store.movies?.movieTrailer);

  return (
    <div>
      <iframe
        className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?&autoplay=1&mute=1&autohide=1&showinfo=0&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>
    </div>
  )
}

export default VideoBackground