import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  console.log(movies)
  const hideScrollbarStyle = {
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none',  /* Firefox */
    msOverflowStyle: 'none',  /* IE 10+ */
  };

  return (
    <div className='px-6 '>
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll' style={hideScrollbarStyle}>
        <div className='flex'>
          {movies?.map(movie =><MovieCard key={movie.id} alt={movie.original_title}  posterPath={movie.poster_path}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieList