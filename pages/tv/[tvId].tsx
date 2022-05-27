import { NextPage } from "next"
import { useRouter } from "next/router";
import { useTv } from "../../src/hooks/tv/use-tv";
import { image } from "../../src/utils";

const Move: NextPage = () => {
  const router = useRouter()
  const { tvId } = router.query
  let id = tvId as string

  const { data: tv, isSuccess: isSuccessTv } = useTv(id)

  return(
    <>
      { isSuccessTv ? 
        <div>
            <p>{tv.title}</p>
          <img src={`${image}${tv.poster_path}`}/>
          <span>{tv.overview}</span>
        </div>
      :
      'erro'
      }
    </>
  )

}

export default Move;