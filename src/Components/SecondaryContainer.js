import React from 'react'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  return (
    <div>
      {/* 
      Consume movie data from movie store. 
      pass in movie list component
      in movie list component there will be movie card component to render all cards.

      */}
      <MovieList/>

    </div>
  )
}

export default SecondaryContainer