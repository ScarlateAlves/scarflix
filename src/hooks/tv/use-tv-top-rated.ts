import { useQuery } from "react-query";
import { GET_TV } from "../../service/auth";

async function fetchTvRated() {
  const rated = `/top_rated`
  const { url, options } = GET_TV(rated)
  const response = await fetch(url, options)
  const json = await response.json()

  return { data: json}
}

export const useTvRated = () => {
  const { data: data, ...resQuery } = useQuery<any>(['useTvRated'], () => fetchTvRated() )

  return{ data: data?.data, ...resQuery}
}