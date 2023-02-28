import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({ sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const lastSearch = useRef('')

  const getMovies = useCallback(
    async ({ search }) => {
      console.log(search)
      if (lastSearch.current === search) {
        return
      }
      try {
        lastSearch.current = search
        setLoading(true)
        setError(null)
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }, [])

  const sortMovies = useMemo(() => {
    console.log('hola')
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortMovies, loading, error, getMovies }
}
