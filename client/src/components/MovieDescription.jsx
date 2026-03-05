import { useMoviesStore } from '../store/moviesStore'

function MovieDescription() {

const { selectedMovie } = useMoviesStore()

  return (
    <section className='movies-Description'>
        <h2>{selectedMovie.Year}</h2>
        <p>{selectedMovie.Released}</p>
        <p>{selectedMovie.Runtime}</p>
        <p>{selectedMovie.Genre}</p>
        <p>{selectedMovie.Actors}</p>
        <p>{selectedMovie.Plot}</p>
        {/* <p>{selectedMovie.}</p>
        <p>{selectedMovie.}</p>
        <p>{selectedMovie.}</p>
        <p>{selectedMovie.}</p> */}
        <button className='movies-Description-btn-chooseSeats'>Choose seats</button>

    </section>
  )
}

export default MovieDescription