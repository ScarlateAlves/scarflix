import type { NextPage } from 'next'
import { useTvAiring } from '../src/hooks/tv/use-tv-airing'
import { useTvRated } from '../src/hooks/tv/use-tv-top-rated'
import { useTvPopular } from '../src/hooks/tv/use-tv-popular'
import { Carrosel } from '../src/components/carrosel'
import { Video } from '../src/components/video/video-prime'

const Tv: NextPage = () => {
  const { data: tvList } = useTvPopular()
  const { data: tvListAiring } = useTvAiring()
  const { data: tvRated } = useTvRated()

  return (
    <>
      <Video id='lWcD2icgoGs?autoplay=1' />
      <Carrosel title='No ar na tv hoje' list={tvListAiring?.results} />
      <Carrosel title='Bem avaliado na tv' list={tvRated?.results} />
      <Carrosel title='Popular na tv' list={tvList?.results} />
    </>
  )
}

export default Tv


