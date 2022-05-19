import { useQuery } from "react-query";
import { GET_MOVE } from "../../service/auth";

async function fetchMoveRated() {
  const rated = `/top_rated`
  const { url, options } = GET_MOVE(rated)
  const response = await fetch(url, options)
  const json = await response.json()

  return { data: json}
}

export const useMoveRated = () => {
  const { data: data, ...resQuery } = useQuery<any>(['useMoveRated'], () => fetchMoveRated() )

  return{ data: data?.data, ...resQuery}
}