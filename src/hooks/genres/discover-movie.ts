import { useQuery } from "react-query";
import { GET_DISCOVER } from "../../service/auth";

async function fetchMovieDiscover(id: string) {
    const move = `/discover/movie`
    const query = `&with_genres=${id}`
    const { url, options } = GET_DISCOVER({url: move, query})
    const response = await fetch(url, options)
    const json = await response.json()
    return { data: json}
}

export const useMovieDiscover = (id: string) => {
  const { data: data, ...resQuery } = useQuery<any>(['useMovieDiscover', id], () => fetchMovieDiscover(id),
  {
     enabled: Boolean(id) 
  }
  )

  return{ data: data?.data, ...resQuery}
}