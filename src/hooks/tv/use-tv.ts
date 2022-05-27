import { useQuery } from "react-query";
import { GET_TV } from "../../service/auth";

async function fetchTv(id: string) {
  const Tv = `/${id}`
  const { url, options } = GET_TV(Tv)
  const response = await fetch(url, options)
  const json = await response.json()

  return { data: json}
}

export const useTv = (id: string) => {
  const { data: data, ...resQuery } = useQuery<any>(['useTv'], () => fetchTv(id) )

  return{ data: data?.data, ...resQuery}
}