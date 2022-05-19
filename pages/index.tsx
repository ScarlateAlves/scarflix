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

  const { data: moveList } = useMovePopular()
  const { data: tvList } = useTvPopular()
  const { data: upcoming } = useMoveUpcoming()
  const { data: tvListAiring } = useTvAiring()
  const { data: rated } = useMoveRated()
  const { data: tvRated } = useTvRated()

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


