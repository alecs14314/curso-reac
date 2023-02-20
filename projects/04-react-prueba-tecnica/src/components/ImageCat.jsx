import { useCatImage } from '../hoocks/useCatImage'

export function ImageCat ({ catFact }) {
  const { catImag } = useCatImage({ fact: catFact })
  return (
    <>
      {catImag && <img src={catImag} alt={catFact} />}
    </>
  )
}
