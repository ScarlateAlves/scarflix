import { useQuery } from "react-query";
import { GET_MOVE } from "../../service/auth";

async function fetchMoveLatest() {
  const latest = `/latest`
  const { url, options } = GET_MOVE(latest)
  const response = await fetch(url, options)
  const json = await response.json()

  return { data: json}
}

export const useMoveLatest = () => {
  const { data: data, ...resQuery } = useQuery<any>(['useMoveLatest'], () => fetchMoveLatest() )

  return{ data: data?.data, ...resQuery}
}