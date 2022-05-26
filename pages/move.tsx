import type { NextPage } from 'next'
import { useMovePopular } from '../src/hooks/move/use-move-popular'
import { useMoveUpcoming } from '../src/hooks/move/use-movie-upcoming'
import { useTvRated } from '../src/hooks/tv/use-tv-top-rated'
import { Carrosel } from '../src/components/carrosel'
import { Video } from '../src/components/video/video-prime'
import { Choose } from 'react-extras'
import { ButtonGeneros } from '../src/components/ButtonGeneros'
import { useGenreMovie } from '../src/hooks/genres/genre-movie'

const Move: NextPage = () => {
  const { data: moveList } = useMovePopular()
  const { data: upcoming } = useMoveUpcoming()
  const { data: tvRated } = useTvRated()
  const { data: movieGenre, isSuccess: isSuccessGenreMovie, isLoading: isLoadingGenreMovie } = useGenreMovie()

  return (
    <>
      <Choose>
       <Choose.When condition={isSuccessGenreMovie} >
       <ButtonGeneros genre={movieGenre?.genres} title='Filmes' />
       </Choose.When>
       <Choose.When condition={isLoadingGenreMovie}>
         ...carregando
       </Choose.When>
       <Choose.Otherwise>
         error
       </Choose.Otherwise>
     </Choose>
      <Video id='lWcD2icgoGs?autoplay=1' />
      <Carrosel title='Filmes Popular' list={moveList?.results} />
      <Carrosel title='Proximos Filmes' list={upcoming?.results} />
      <Carrosel title='Bem avaliado na tv' list={tvRated?.results} />
    </>
  )
}

export default Move



