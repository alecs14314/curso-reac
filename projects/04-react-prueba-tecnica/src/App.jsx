import { useEffect, useState } from 'react'
import { getRandomFact } from './logic/util'
import './App.css'
import { ImageCat } from './components/ImageCat'

function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then((newFact) => {
      setFact(newFact)
    })
  }
  useEffect(refreshFact, [])
  return { fact, refreshFact }
}

export function App () {
  const { fact, refreshFact } = useCatFact()

  const handledClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1> APP de Gatitos</h1>
      <button onClick={handledClick}>Actualizar</button>
      {fact && <p>{fact}</p>}
      <ImageCat catFact={fact} />
    </main>
  )
}
