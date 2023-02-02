
import { CAT_ENDPOINT_IMAGE_FACT, CAT_ENDPOINT_RANDOM_FACT } from '../constants'

export const getRandomFact = async () => {
  const result = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(response => response.json())
    .then(data => {
      return data.fact.split(' ', 3).join(' ')
    })
  return result
}
export const getCatImag = async () => {
  const result = await fetch(CAT_ENDPOINT_IMAGE_FACT)
    .then(response => response.json())
    .then(data => {
      return data.file
    })
  return result
}
