
function ListOfMovies ({ movies }) {
  return (

    <ul className='movies'>
      {movies.map(entity => (
        <li className='movie' key={entity.id}>
          <h3>{entity.title}</h3>
          <p>{entity.year}</p>
          <img src={entity.poster} alt={entity.title} />
        </li>))}
    </ul>

  )
}

function NoMovies () {
  return (
    <h3>No se encontro informacion</h3>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMovies />

  )
}
