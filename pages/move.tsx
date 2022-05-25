import type { NextPage } from 'next'
import { useMovePopular } from '../src/hooks/move/use-move-popular'
import { useMoveUpcoming } from '../src/hooks/move/use-movie-upcoming'
import { useTvRated } from '../src/hooks/tv/use-tv-top-rated'
import { Carrosel } from '../src/components/carrosel'
import { Video } from '../src/components/video/video-prime'

const Move: NextPage = () => {
  const { data: moveList } = useMovePopular()
  const { data: upcoming } = useMoveUpcoming()
  const { data: tvRated } = useTvRated()

  return (
    <>
      <Video id='lWcD2icgoGs?autoplay=1' />
      <Carrosel title='Filmes Popular' list={moveList?.results} />
      <Carrosel title='Proximos Filmes' list={upcoming?.results} />
      <Carrosel title='Bem avaliado na tv' list={tvRated?.results} />
    </>
  )
}

export default Move


