import { NextPage } from "next"
import { useRouter } from "next/router";
import { Choose } from "react-extras";
import { Play } from "../../src/components/layout-play/play";
import { useMove } from "../../src/hooks/move/use-move";
import { useMovieRecommendations } from "../../src/hooks/move/use-move-recommendations";
import { useMovieSimilar } from "../../src/hooks/move/use-move-similar";
import { useMoveVideos } from "../../src/hooks/move/use-move-videos";
import { image } from "../../src/utils";

const Move: NextPage = () => {
  const router = useRouter()
  const { moveId } = router.query
  let id = moveId as string

  const { data: move, isSuccess: isSuccessMove } = useMove(id)
  const { data: moveVideos, isSuccess: isSuccessMoveVideos } = useMoveVideos(id)
  const { data: movieSimilar, isSuccess: isSuccessMoveSimilar } = useMovieSimilar(id)
  const { data: movieRecommendations, isSuccess: isSuccessMovieRecommendations } = useMovieRecommendations(id)

  const videoKey = moveVideos?.results[0].key
  const similar = movieSimilar?.results
  const recommendations= movieRecommendations?.results

  const isSuccess = isSuccessMove && isSuccessMoveVideos && isSuccessMoveSimilar && isSuccessMovieRecommendations

  return(
    <>
    <Choose>
      <Choose.When condition={isSuccess}>
      <Play 
        videoKey={videoKey} 
        data={move} 
        similar={similar}
        recommendations={recommendations}
          />
      </Choose.When>
      <Choose.Otherwise>
        ...carregando
      </Choose.Otherwise>
    </Choose>
    </>
  )

}

export default Move;