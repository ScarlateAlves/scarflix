import type { NextPage } from 'next'
import { useMovePopular } from '../src/hooks/move/use-move-popular'
import { useMoveUpcoming } from '../src/hooks/move/use-movie-upcoming'
import { useMoveRated } from '../src/hooks/move/use-movie-rated'
import { useTvAiring } from '../src/hooks/tv/use-tv-airing'
import { useTvRated } from '../src/hooks/tv/use-tv-top-rated'
import { useTvPopular } from '../src/hooks/tv/use-tv-popular'
import { Carrosel } from '../src/components/carrosel'
import { Choose } from 'react-extras'
import { useMoveVideos } from '../src/hooks/move/use-move-videos'
import { Video } from '../src/components/video/video-prime'

const Home: NextPage = () => {
  const { data: moveList, isSuccess: isSuccessPopular, isError: isErrorPopular, isLoading: isLoadingPopular } = useMovePopular()
  const { data: tvList, isSuccess: isSuccessTvPopular, isError: isErrorTvPopular, isLoading: isLoadingTvPopolar } = useTvPopular()
  const { data: upcoming, isSuccess: isSuccessUpcoming, isError: isErrorUpcoming, isLoading: isLoadingUpcoming } = useMoveUpcoming()
  const { data: tvListAiring, isSuccess: isSuccessTvAiring, isError: isErrorTvAiring , isLoading: isLoadingTvAiring } = useTvAiring()
  const { data: rated, isSuccess: isSuccessRated, isError: isErrorRated, isLoading: isLoadingRated } = useMoveRated()
  const { data: tvRated, isSuccess: isSuccessTvRated, isError: isErrorTvRated, isLoading: isLoadingTvRated } = useTvRated()
  const { data: moveVideo, isError: isErrorVideo, isLoading: isLoadingVideo, isSuccess: isSuccessVideo } = useMoveVideos(String(moveList?.results[1]?.id))

  const isSuccess = isSuccessPopular && isSuccessRated && isSuccessTvAiring && isSuccessTvPopular && isSuccessTvRated && isSuccessUpcoming
  const isError = isErrorPopular && isErrorRated && isErrorTvAiring && isErrorTvPopular && isErrorTvRated && isErrorUpcoming
  const isLoading = isLoadingPopular && isLoadingRated && isLoadingTvAiring && isLoadingTvPopolar && isLoadingTvRated && isLoadingUpcoming

  const keyVideo = moveVideo?.results[0]?.key

return (
    <>
    <Choose>
      <Choose.When condition={isSuccessVideo}>
      <Video id={keyVideo} />
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
          <Carrosel genre='move' title='Filmes Popular' list={moveList?.results} />
          <Carrosel genre='move' title='Proximos Filmes' list={upcoming?.results} />
          <Carrosel genre='move' title='Bem avaliado' list={rated?.results} />
          <Carrosel genre='tv'title='No ar na tv hoje' list={tvListAiring?.results} />
          <Carrosel genre='tv' title='Bem avaliado na tv' list={tvRated?.results} />
          <Carrosel genre='tv' title='Popular na tv' list={tvList?.results} />
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


