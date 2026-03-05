import { useParams } from 'react-router-dom';
import MovieDescription from "../components/MovieDescription"
import { useNavigate } from 'react-router-dom';


function MovieDetailsPage() {

  const {title} = useParams()
  const navigate = useNavigate();


  return (
    <section className='movie-details'>
      <h1>{title}</h1>
      <MovieDescription />
      <button className='movie-details-back-btn' onClick={() => navigate(`/`) }>Back to list</button>
    </section>
  )
}

export default MovieDetailsPage