import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import { parseCookies, setCookie } from 'nookies'
import {  USER_tOKEN } from '../src/service/auth'
import { useMovePopular } from '../src/hooks/move/use-move-popular'
import { useMoveUpcoming } from '../src/hooks/move/use-movie-upcoming'
import { useMoveRated } from '../src/hooks/move/use-movie-rated'
import { useTvAiring } from '../src/hooks/tv/use-tv-airing'
import { useTvRated } from '../src/hooks/tv/use-tv-top-rated'
import { useTvPopular } from '../src/hooks/tv/use-tv-popular'
import { Carrosel } from '../src/components/carrosel'
import { Choose } from 'react-extras'
import { Box, Button, Flex, Heading } from 'rebass'
import { useMoveVideos } from '../src/hooks/move/use-move-videos'
import { Video } from '../src/components/video/video-prime'
import Link from 'next/link'
import { stringify } from 'querystring'

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

const Home: NextPage = () => {


  const { data: moveList, isSuccess: isSuccessPopular, isError: isErrorPopular, isLoading: isLoadingPopular } = useMovePopular()
  const { data: moveVideo, isError: isErrorVideo, isLoading: isLoadingVideo, isSuccess: isSuccessVideo } = useMoveVideos(String(moveList?.results[0]?.id ))
 
  const { data: tvList, isSuccess: isSuccessTvPopular, isError: isErrorTvPopular, isLoading: isLoadingTvPopolar } = useTvPopular()
  const { data: upcoming, isSuccess: isSuccessUpcoming, isError: isErrorUpcoming, isLoading: isLoadingUpcoming } = useMoveUpcoming()
  const { data: tvListAiring, isSuccess: isSuccessTvAiring, isError: isErrorTvAiring , isLoading: isLoadingTvAiring } = useTvAiring()
  const { data: rated, isSuccess: isSuccessRated, isError: isErrorRated, isLoading: isLoadingRated } = useMoveRated()
  const { data: tvRated, isSuccess: isSuccessTvRated, isError: isErrorTvRated, isLoading: isLoadingTvRated } = useTvRated()

  const isSuccess = isSuccessPopular && isSuccessRated && isSuccessTvAiring && isSuccessTvPopular && isSuccessTvRated && isSuccessUpcoming
  const isError = isErrorPopular && isErrorRated && isErrorTvAiring && isErrorTvPopular && isErrorTvRated && isErrorUpcoming
  const isLoading = isLoadingPopular && isLoadingRated && isLoadingTvAiring && isLoadingTvPopolar && isLoadingTvRated && isLoadingUpcoming

return (
    <>
    <Choose>
      <Choose.When condition={isSuccessVideo}>
      <Video id='lWcD2icgoGs?autoplay=1' />
      </Choose.When>
      <Choose.When condition={isLoadingVideo}>
        ...carregando
      </Choose.When>
      <Choose.When condition={isErrorVideo}>
        Error
        </Choose.When>
    </Choose>
   
      <Choose>
        <Choose.When condition={isSuccess}>
          <Carrosel title='Filmes Popular' list={moveList?.results} />
          <Carrosel title='Proximos Filmes' list={upcoming?.results} />
          <Carrosel title='Bem avaliado' list={rated?.results} />
          <Carrosel title='No ar na tv hoje' list={tvListAiring?.results} />
          <Carrosel title='Bem avaliado na tv' list={tvRated?.results} />
          <Carrosel title='Popular na tv' list={tvList?.results} />
        </Choose.When>
        <Choose.When condition={isLoading}>
          ...carregando        
        </Choose.When>
        <Choose.When condition={isError}>
          Erro
        </Choose.When>
      </Choose>
    </>
  )
}

export default Home


