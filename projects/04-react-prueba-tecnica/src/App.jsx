import { useEffect, useState } from 'react'

export function App () {
  const [fact, setFact] = useState('lorem ipsum cat fact .......')

  const getCatFact = async () => {
    const data = await fetch('https://catfact.ninja/fact')
      .then(response => response.json())
    console.log(data)
  }

  useEffect(() => {
    getCatFact()
  }
  , [fact]
  )
  return (

    <>
      <h1> APP de Gatitos</h1>
      <p>{fact}</p>
    </>
  )
}
