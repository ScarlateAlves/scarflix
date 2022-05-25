import { useQuery } from "react-query";
import { GET_MOVE } from "../../service/auth";

export interface ResultMove {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: false
  vote_average: 6.7
  vote_count: 618
}

export interface ListMove {
  page?: number,
  results?: ResultMove[] | []
  total_pages?: number
  total_results?: number
}

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