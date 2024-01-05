import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList'

const SecondaryContainer = () => {

  const movieData = useSelector(store => store.movies);
  return (
    <div className='bg-black'>
      <div className='-mt-[15%] relative'>
        <MovieList title={"Now Playing"} nowPlayingMovies={movieData?.nowPlayingMovies} />
        <MovieList title={"Now Playing"} nowPlayingMovies={movieData?.nowPlayingMovies} />
        <MovieList title={"Now Playing"} nowPlayingMovies={movieData?.nowPlayingMovies} />
        <MovieList title={"Now Playing"} nowPlayingMovies={movieData?.nowPlayingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer