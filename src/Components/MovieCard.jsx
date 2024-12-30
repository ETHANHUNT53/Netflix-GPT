import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath,alt}) => {
  return (
    <div className='w-48 pr-4 cursor-pointer '>
      <img className='transform transition-transform duration-300 hover:scale-105' src={IMG_CDN_URL+posterPath} alt={alt} />
    </div>
  )
}

export default MovieCard