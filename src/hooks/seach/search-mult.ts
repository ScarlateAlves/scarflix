import { useQuery } from "react-query";
import { GET_SEACH } from "../../service/auth";

async function fetchSearchMult(query: string) {
  const mult = `/multi`
  const { url, options } = GET_SEACH({ url: mult, query: query})
  const response = await fetch(url, options)
  const json = await response.json()

  return { data: json}
}

export const useSearchMult = (query: string) => {
  const { data: data, ...resQuery } = useQuery<any>(['useSearchMult'], () => fetchSearchMult(query) )

  return{ data: data?.data, ...resQuery}
}