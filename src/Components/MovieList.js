import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, nowPlayingMovies }) => {

  return (
    <div>
      <div className='w-11/12 m-auto'>
        <h1 className='font-bold text-3xl text-white py-5'>{title}</h1>
        <div className='flex overflow-x-auto'>
          <div className='flex'>
            {nowPlayingMovies?.map(movie => (
              <MovieCard key={movie?.id} movieImg={movie?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieList