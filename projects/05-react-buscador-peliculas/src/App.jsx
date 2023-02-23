import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { Movies } from './components/movies'
import { useMovies } from './hoocks/useMovies'
import { useSearch } from './hoocks/useSearch'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, error: errorFetch, getMovies } = useMovies({ sort })

  const handledSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const debounceGethMovies = useCallback(debounce((search) => { getMovies({ search }) }, 500), [])

  const handledChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGethMovies(newSearch)
  }
  const handledSort = () => {
    setSort(!sort)
  }
  return (
    <div className='page'>
      <header>
        <h1>Buscador de Peliculas</h1>
        <form className='form' onSubmit={handledSubmit}>
          <input
            name='query'
            onChange={handledChange}
            value={search}
            placeholder='Avengers, Star Wars....'
          />
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
