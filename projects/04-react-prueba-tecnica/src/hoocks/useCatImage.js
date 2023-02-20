import { useEffect, useState } from 'react'
import { getCatImag } from '../logic/util'
export function useCatImage ({ fact }) {
  const [catImag, setCatImag] = useState()
  useEffect(() => {
    if (!fact) return
    getCatImag().then(result => {
      return setCatImag(result)
    })
  }, [fact])
  return { catImag }
}
