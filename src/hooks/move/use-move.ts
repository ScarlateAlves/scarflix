import { useQuery } from "react-query";
import { GET_MOVE } from "../../service/auth";

async function fetchMove(id: string) {
  const move = `/${id}`
  const { url, options } = GET_MOVE(move)
  const response = await fetch(url, options)
  const json = await response.json()

  return { data: json}
}

export const useMove = (id: string) => {
  const { data: data, ...resQuery } = useQuery<any>(['useMove'], () => fetchMove(id) )

  return{ data: data?.data, ...resQuery}
}