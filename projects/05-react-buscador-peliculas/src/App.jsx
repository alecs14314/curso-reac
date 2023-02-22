import { useEffect, useState } from 'react'
import './App.css'
import { Movies } from './components/movies'
import { useMovies } from './hoocks/useMovies'
import { useSearch } from './hoocks/useSearch'

function App () {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, error: errorFetch, getMovies } = useMovies({ search, sort })

  const handledSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }
  const handledChange = (event) => {
    updateSearch(event.target.value)
  }
  const handledSort = () => {
    setSort(!sort)
  }
  useEffect(() => {
    console.log('render getmovies')
  }, [getMovies])

  return (
    <div className='page'>
      <header>

        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handledSubmit}>
          <input name='query' onChange={handledChange} value={search} placeholder='Avengers, Star Wars....' />
          <input type='checkbox' onChange={handledSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {errorFetch && <p style={{ color: 'red' }}>{errorFetch}</p>}
        {loading && <p>Cargando.........</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
