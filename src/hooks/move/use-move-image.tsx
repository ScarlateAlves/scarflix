import { useQuery } from "react-query";
import { GET } from "../../service/auth";

async function fetchImage(id: string) {
  const move = `/movie/${id}/images`
  const { url, options } = GET(move)
  const response = await fetch(url, options)
  const json = await response.json()

  return { data: json}
}

export const useMoveImage = (id: string) => {
  const { data: data, ...resQuery } = useQuery<any>(['useImage'], () => fetchImage(id) )

  return{ data: data?.data, ...resQuery}
}