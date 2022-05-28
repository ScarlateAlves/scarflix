import { useQuery } from "react-query";
import { GET } from "../../service/auth";

async function fetchMovieSimilar(id: string) {
    const move = `/movie/${id}/similar`
    const { url, options } = GET(move)
    const response = await fetch(url, options)
    const json = await response.json()
    return { data: json}
}

export const useMovieSimilar = (id: string) => {
  const { data: data, ...resQuery } = useQuery<any>(['useMovieSimilar', id], () => fetchMovieSimilar(id),
  {
     enabled: Boolean(id) 
  }
  )

  return{ data: data?.data, ...resQuery}
}