import React from 'react'
import MovieCard from "../components/MovieCard"
import SearchBar from "../components/SearchBar"


function HomePage() {



  return (
    <section className='home-page'>
        <section className='home-page-header'>
            <h1>Movie Night</h1>
            <p>Search a movie and pick your seats</p>
        </section>
        
        <section className='home-page-SearchBar'>
            <SearchBar />
        </section>

        <section className='home-page-MovieCard'>
            <MovieCard />
        </section>
    </section>
  )
}

export default HomePage