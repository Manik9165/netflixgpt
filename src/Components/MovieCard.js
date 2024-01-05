import React from 'react'
import { IMAGE_URL } from '../Utils/Constants';

const MovieCard = ({movieImg}) => {
  return (
    <div className='w-40 px-2'>
        <img src={IMAGE_URL+movieImg} alt="NowPlayingMovies"/>
    </div>
  )
}

export default MovieCard