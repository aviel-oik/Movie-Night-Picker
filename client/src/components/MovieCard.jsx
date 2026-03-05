import { useEffect } from 'react';
import { useMoviesStore } from '../store/moviesStore'
import { useNavigate } from 'react-router-dom';



function MovieCard() {

  const {movies, isLoading, error, setMovies, setSelectedMovie, selectedMovie} = useMoviesStore()
  const navigate = useNavigate();

  useEffect(() => {
    setMovies()
  }, []);

  const goToSeeDetails = (title) => {
    navigate(`/MovieDetailsPage/${title}`)
    setSelectedMovie(title)
    console.log(selectedMovie)
  }

  return (
    <section className='movies-cards'>
      {
        movies.map((movie) => (
                <div className="movie-card" key={movie.Title}>
                  <h2>{movie.Title}</h2>
                  <p>{movie.Year}</p>
                  <p>{movie.Runtime}</p>
                  <p>{movie.Genre}</p>
                  <p>{movie.Language}</p>
                  <button className='movie-card-btn' onClick={() => goToSeeDetails(movie.Title)}>see details</button>
                </div>
            ))
      }
    </section>
  )
}

export default MovieCard