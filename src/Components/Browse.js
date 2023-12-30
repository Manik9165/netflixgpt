import React from 'react'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {/* Main Container [Video Title | Video Bg] | Secondary Container  */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse