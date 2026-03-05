import { useMoviesStore } from '../store/moviesStore'
import { useNavigate } from 'react-router-dom';

function MovieDescription() {

const { selectedMovie } = useMoviesStore()
const navigate = useNavigate();

const goToSeatsChooice = () => {
  navigate(`/SeatsPage/${selectedMovie.Title}`)
}

  return (
    <section className='movies-Description'>
        <h2>{selectedMovie.Year}</h2>
        <p>{selectedMovie.Released}</p>
        <p>{selectedMovie.Runtime}</p>
        <p>{selectedMovie.Genre}</p>
        <p>{selectedMovie.Actors}</p>
        <p>{selectedMovie.Plot}</p>
        <button className='movies-Description-btn-chooseSeats' onClick={() => goToSeatsChooice()}>Choose seats</button>

    </section>
  )
}

export default MovieDescription