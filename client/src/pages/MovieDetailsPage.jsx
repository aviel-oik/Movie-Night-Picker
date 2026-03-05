import { useParams } from 'react-router-dom';
import MovieDescription from "../components/MovieDescription"

function MovieDetailsPage() {

  const {title} = useParams()

  return (
    <section className='movie-details'>
      <h1>{title}</h1>
      <MovieDescription />
    </section>
  )
}

export default MovieDetailsPage