import { useQuery } from "react-query";
import { GET } from "../../service/auth";

async function fetchVideos(id: string) {
    const tv = `/tv/${id}/videos`
    const { url, options } = GET(tv)
    const response = await fetch(url, options)
    const json = await response.json()
    return { data: json}
}

export const useTvVideos = (id: string) => {
  const { data: data, ...resQuery } = useQuery<any>(['useVideos', id], () => fetchVideos(id),
  {
     enabled: Boolean(id) 
  }
  )

  return{ data: data?.data, ...resQuery}
}