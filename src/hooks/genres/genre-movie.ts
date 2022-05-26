import { useQuery } from "react-query";
import { USER_GET_GENRE } from "../../service/auth";

async function fetchGenreMovie() {
  const type = 'movie'
  const { url, options } = USER_GET_GENRE(type)
  const response = await fetch(url, options)
  const json = await response.json()

  return { data: json}
}

export const useGenreMovie = () => {
  const { data: data, ...resQuery } = useQuery<any>(['useGenreMovie'], () => fetchGenreMovie() )

  return{ data: data?.data, ...resQuery}
}