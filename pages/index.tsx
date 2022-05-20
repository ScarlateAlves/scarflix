import type { NextPage } from 'next'
import { useEffect } from 'react'
import { setCookie } from 'nookies'
import { USER_tOKEN } from '../src/service/auth'
import { useMovePopular } from '../src/hooks/move/use-move-popular'
import { useMoveUpcoming } from '../src/hooks/move/use-movie-upcoming'
import { useMoveRated } from '../src/hooks/move/use-movie-rated'
import { useTvAiring } from '../src/hooks/tv/use-tv-airing'
import { useTvRated } from '../src/hooks/tv/use-tv-top-rated'
import { useTvPopular } from '../src/hooks/tv/use-tv-popular'
import { Carrosel } from '../src/components/carrosel'
import { Choose } from 'react-extras'

const Home: NextPage = () => {
  async function getApiToken(){
    const { url, options } = USER_tOKEN()
    const response = await fetch(url, options)
    const json = await response.json()
    const token = json.request_token
    setCookie(undefined, 'scarflix.token', token, {  //add token no cookie
      maxAge: 60 * 60 * 1
    })
  }

  const { data: moveList, isSuccess: isSuccessPopular, isError: isErrorPopular, isLoading: isLoadingPopular } = useMovePopular()
  const { data: tvList, isSuccess: isSuccessTvPopular, isError: isErrorTvPopular, isLoading: isLoadingTvPopolar } = useTvPopular()
  const { data: upcoming, isSuccess: isSuccessUpcoming, isError: isErrorUpcoming, isLoading: isLoadingUpcoming } = useMoveUpcoming()
  const { data: tvListAiring, isSuccess: isSuccessTvAiring, isError: isErrorTvAiring , isLoading: isLoadingTvAiring } = useTvAiring()
  const { data: rated, isSuccess: isSuccessRated, isError: isErrorRated, isLoading: isLoadingRated } = useMoveRated()
  const { data: tvRated, isSuccess: isSuccessTvRated, isError: isErrorTvRated, isLoading: isLoadingTvRated } = useTvRated()

  const isSuccess = isSuccessPopular && isSuccessRated && isSuccessTvAiring && isSuccessTvPopular && isSuccessTvRated && isSuccessUpcoming
  const isError = isErrorPopular && isErrorRated && isErrorTvAiring && isErrorTvPopular && isErrorTvRated && isErrorUpcoming
  const isLoading = isLoadingPopular && isLoadingRated && isLoadingTvAiring && isLoadingTvPopolar && isLoadingTvRated && isLoadingUpcoming

  useEffect(() => {
    getApiToken()
  }, [])

  return (
    <>
      <Carrosel title='Filmes Popular' list={moveList?.results} />
      <Carrosel title='Proximos Filmes' list={upcoming?.results} />
      <Carrosel title='Bem avaliado' list={rated?.results} />
      <Carrosel title='No ar na tv hoje' list={tvListAiring?.results} />
      <Carrosel title='Bem avaliado na tv' list={tvRated?.results} />
      <Carrosel title='Popular na tv' list={tvList?.results} />
    </>
  )
}

export default Home


