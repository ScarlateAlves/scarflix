import { useQuery } from "react-query";
import { GET_TV } from "../../service/auth";

async function fetchTvPopular() {
  const popular = `/popular`
  const { url, options } = GET_TV(popular)
  const response = await fetch(url, options)
  const json = await response.json()

  return { data: json}
}

export const useTvPopular = () => {
  const { data: data, ...resQuery } = useQuery<any>(['useTvPopular'], () => fetchTvPopular() )

  return{ data: data?.data, ...resQuery}
}