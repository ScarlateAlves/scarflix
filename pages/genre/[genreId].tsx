import { NextPage } from "next"
import { useRouter } from "next/router"
import { Flex, Heading } from "rebass"
import { CardLink } from "../../src/components/card/card-link"
import { useMovieDiscover } from "../../src/hooks/genres/discover-movie"
import { image } from "../../src/utils"

const Genre: NextPage  = () => {
  const router = useRouter()
  const { genreId } = router.query
  const { data } = useMovieDiscover(String(genreId))
  console.log(data)

  return(
    <>
    <Heading fontSize='2rem' fontFamily='Montserrat, sans-serif' mt='70px'>Genero</Heading>
    <Flex flexWrap='wrap' justifyContent='center'>
    {data?.results.map((item: any) => (
          <Flex m='5px' key={item.id}>
             <CardLink id={item.id} src={`${image}${item.poster_path}`} title={item.title ? item.title : item.name} />
          </Flex>
        ))}
    </Flex>
    </>
  )
}

export default Genre;