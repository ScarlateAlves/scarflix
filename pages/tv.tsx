import type { NextPage } from 'next'
import { useTvAiring } from '../src/hooks/tv/use-tv-airing'
import { useTvRated } from '../src/hooks/tv/use-tv-top-rated'
import { useTvPopular } from '../src/hooks/tv/use-tv-popular'
import { Carrosel } from '../src/components/carrosel'
import { Video } from '../src/components/video/video-prime'
import { ButtonGeneros } from '../src/components/ButtonGeneros'
import { useGenreTv } from '../src/hooks/genres/genre-tv'
import { Choose } from 'react-extras'


const Tv: NextPage = () => {
  const { data: tvList } = useTvPopular()
  const { data: tvListAiring } = useTvAiring()
  const { data: tvRated } = useTvRated()
  const { data: tvGenre, isSuccess: isSuccessGenreTv, isLoading: isLoadingGenreTv } = useGenreTv()

  return (
    <> 
     <Choose>
       <Choose.When condition={isSuccessGenreTv} >
       <ButtonGeneros genre={tvGenre?.genres} title='Series de Tv' />
       </Choose.When>
       <Choose.When condition={isLoadingGenreTv}>
         ...carregando
       </Choose.When>
       <Choose.Otherwise>
         error
       </Choose.Otherwise>
     </Choose>
      <Video id='lWcD2icgoGs?autoplay=1' />
      <Carrosel title='No ar na tv hoje' list={tvListAiring?.results} />
      <Carrosel title='Bem avaliado na tv' list={tvRated?.results} />
      <Carrosel title='Popular na tv' list={tvList?.results} />
    </>
  )
}

export default Tv


