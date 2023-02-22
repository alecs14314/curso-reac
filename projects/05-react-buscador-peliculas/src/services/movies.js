export const searchMovies = async ({ search }) => {
  if (search === '') { return }
  try {
    // return fetch(`https://www.omdbapi.com/?apikey=5d693e80&s=${search}`).then(response => response.json())
    const response = await fetch(`https://www.omdbapi.com/?apikey=5d693e80&s=${search}`)
    const result = await response.json()
    const movies = result.Search
    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster

    }))
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
