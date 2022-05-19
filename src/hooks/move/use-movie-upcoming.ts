import { useQuery } from "react-query";
import { GET_MOVE } from "../../service/auth";

async function fetchMoveUpcoming() {
  const upcoming = `/upcoming`
  const { url, options } = GET_MOVE(upcoming)
  const response = await fetch(url, options)
  const json = await response.json()

  return { data: json}
}

export const useMoveUpcoming = () => {
  const { data: data, ...resQuery } = useQuery<any>(['useMoveUpcoming'], () => fetchMoveUpcoming() )

  return{ data: data?.data, ...resQuery}
}