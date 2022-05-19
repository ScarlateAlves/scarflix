import { useQuery } from "react-query";
import { GET_MOVE } from "../../service/auth";

async function fetchMovePopular() {
  const popular = `/popular`
  const { url, options } = GET_MOVE(popular)
  const response = await fetch(url, options)
  const json = await response.json()

  return { data: json}
}

export const useMovePopular = () => {
  const { data: data, ...resQuery } = useQuery<any>(['useMovePopular'], () => fetchMovePopular() )

  return{ data: data?.data, ...resQuery}
}