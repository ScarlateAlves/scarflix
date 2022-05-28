import { useQuery } from "react-query";
import { GET } from "../../service/auth";

async function fetchMovieRecommendations(id: string) {
    const move = `/movie/${id}/recommendations`
    const { url, options } = GET(move)
    const response = await fetch(url, options)
    const json = await response.json()
    return { data: json}
}

export const useMovieRecommendations = (id: string) => {
  const { data: data, ...resQuery } = useQuery<any>(['useMovieRecommendations', id], () => fetchMovieRecommendations(id),
  {
     enabled: Boolean(id) 
  }
  )

  return{ data: data?.data, ...resQuery}
}