import { useQuery } from "react-query";
import { GET } from "../../service/auth";

async function fetchVideos(id: string) {
  const move = `/movie/${id}/videos`
  const { url, options } = GET(move)
  const response = await fetch(url, options)
  const json = await response.json()

  return { data: json}
}

export const useMoveVideos = (id: string) => {
  const { data: data, ...resQuery } = useQuery<any>(['useVideos'], () => fetchVideos(id) )

  return{ data: data?.data, ...resQuery}
}