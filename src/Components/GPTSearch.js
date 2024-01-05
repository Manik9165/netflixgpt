import React from 'react'
import { BG_IMAGE } from '../Utils/Constants'
import GPTSearchBar from './GPTSearchBar'
import GPTSearchUI from './GPTSearchUI'

const GPTSearch = () => {
  return (
    <div>
        <div className='absolute'>
        <img
          src= {BG_IMAGE}
          alt='LoginBgImg'
        />
      </div>
        <GPTSearchBar/>
        <GPTSearchUI/>
    </div>
  )
}

export default GPTSearch