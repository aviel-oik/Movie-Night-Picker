import { useState } from 'react'
import { useMoviesStore } from '../store/moviesStore'

function SearchBar() {

  const [input, setInput] = useState('')
  const {movies, setMovies, searchQuery, setSearchQuery} = useMoviesStore()

  const searchByTitleAndGenre = () => {
    const filteredMovies = movies.filter((movie) => {
      return (
        movie.Title.toLowerCase().includes(input.toLowerCase()) ||
        movie.Genre.toLowerCase().includes(input.toLowerCase())
      )
    })
    setMovies(filteredMovies)
  }

  return (
    <section className='search-bar'>
      <input type="text" placeholder='Search moviee by title or genre...' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => searchByTitleAndGenre()}>Search</button>
    </section>
  )
}

export default SearchBar