import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  useEffect(() => {
    if (isFirstInput.current === true) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('Ingrese un contenido a buscar')
      return
    }
    if (search.length <= 3) {
      console.log('3 caracteres')
      setError('Ingrese almenos 3 caracteres para realizar la busqueda')
      return
    }
    setError(null)
  }, [search])
  return { search, updateSearch, error }
}
