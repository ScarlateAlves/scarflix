import { useQuery } from "react-query";
import { GET_TV } from "../../service/auth";

async function fetchTvAiring() {
  const popular = `/airing_today`
  const { url, options } = GET_TV(popular)
  const response = await fetch(url, options)
  const json = await response.json()

  return { data: json}
}

export const useTvAiring = () => {
  const { data: data, ...resQuery } = useQuery<any>(['useTvAiring'], () => fetchTvAiring() )

  return{ data: data?.data, ...resQuery}
}