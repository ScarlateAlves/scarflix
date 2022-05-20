import { NextPage } from "next"
import { useRouter } from "next/router";
import { useMove } from "../../src/hooks/move/use-move";
import { useMoveImage } from "../../src/hooks/move/use-move-image";
import { image } from "../../src/utils";

const Move: NextPage = () => {
  const router = useRouter()
  const { moveId } = router.query
  let id = moveId as string

  const { data: move, isSuccess: isSuccessMove } = useMove(id)

  const { data } = useMoveImage(id)
console.log(data)
  return(
    <>
      { isSuccessMove ? 
        <div>
            <p>{move.title}</p>
          <img src={`${image}${move.poster_path}`}/>
          <span>{move.overview}</span>
        </div>
      :
      'erro'
      }
    </>
  )

}

export default Move;