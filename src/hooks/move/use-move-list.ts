import { useQuery } from "react-query";
import { USER_GET } from "../../service/auth";

interface List {
  results: any[] | []
}

interface MoveListProps {
  data: List
}
async function fetchMoveList() {
  const { url, options } = USER_GET()
  const response = await fetch(url, options)
  const json = await response.json()

  return { data: json}
}

export const useMoveList = () => {
  const { data: data, ...resQuery } = useQuery<MoveListProps>(['useMoveList'], () => fetchMoveList() )

  return{ data: data?.data, ...resQuery}
}