import React from 'react'
import { useMoviesStore } from '../store/moviesStore'
import SeatsGrid from '../components/SeatsGrid'

function SeatsPage() {

const { selectedMovie } = useMoviesStore()

  return (
    <section className='seats'>
      <section className='seats-header'>
        <h1>Choose your seats for {selectedMovie.Title}</h1>
        <p>Movie ID: {selectedMovie.imdbID}</p>
      </section>
    <SeatsGrid />
    </section>
  )
}

export default SeatsPage