import { useQuery } from "react-query";
import { USER_GET_GENRE } from "../../service/auth";

async function fetchGenreTv() {
  const type = 'tv'
  const { url, options } = USER_GET_GENRE(type)
  const response = await fetch(url, options)
  const json = await response.json()

  return { data: json}
}

export const useGenreTv = () => {
  const { data: data, ...resQuery } = useQuery<any>(['useGenreTv'], () => fetchGenreTv() )

  return{ data: data?.data, ...resQuery}
}