import { NextPage } from "next"
import { useRouter } from "next/router";
import { useMove } from "../../src/hooks/move/use-move";
import { image } from "../../src/utils";

const Move: NextPage = () => {
  const router = useRouter()
  const { moveId } = router.query
  let id = moveId as string

  const { data: move, isSuccess: isSuccessMove } = useMove(id)
  console.log(move)

  return(
    <>
      { isSuccessMove ? 
        <div>
            <p>{move.title}</p>
          <img src={`${image}${move.poster_path}`}/>
        </div>
      :
      'erro'
      }
    </>
  )

}

export default Move;