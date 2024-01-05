import React from 'react'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import GPTSearch from './GPTSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  const gptToggle = useSelector(store => store.gpt.gptSearchToggle)
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      {gptToggle ? <GPTSearch /> :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>}
    </div>
  )
}

export default Browse