import { For } from "react-extras"
import { Box, Flex, Heading, Text } from "rebass"
import { CardLink } from "../card/card-link"
import { Video } from "../video/video-prime"
import { image } from '../../utils/index'
import { Carrosel } from "../carrosel"

interface PlayProps {
  data?: any
  videoKey?: string
  similar?: any
  recommendations?: any
}

export const Play = ({ data, videoKey, similar, recommendations }: PlayProps) => {

  console.log(data)

  const movieSimilar = recommendations
  .filter((item: any, index: number)=> index < 6)
  .map((item: any) => {
    return item
  })

  return(
    <>
    <Flex pt='80px'>
      <Flex width="70%"  flexDirection='column'>
        <Video marginBottom='2rem' width="100%" height="80vh" id={videoKey} />
        <Flex mb='3.5rem' flexDirection='column'>
        <Heading mb='1.5rem' fontFamily='Montserrat, sans-serif' fontSize='38px'>{data.original_title}</Heading>
        <Heading mb='0.5rem' fontSize='20px' fontFamily='Montserrat, sans-serif'>{data.release_date}</Heading>
        <Text>{data.homepage}</Text>
        </Flex>
        <Heading mb='1rem' fontFamily='Montserrat, sans-serif'>Descrição</Heading>
        <Text mb='3rem'>{data.overview}</Text>
        <Heading fontFamily='Montserrat, sans-serif'>Produção</Heading>
        <Flex my='1rem' style={{ gap: '2rem'}} flexWrap='wrap'>
          <For 
            of={data.production_companies}
            render={(item: any, index) => 
            <Flex flexDirection='column'>
              <Text>{index+1} - {item?.name}</Text>
              <Text>Origem: { item?.origin_country}</Text>
            </Flex>}
          />
        </Flex>
      </Flex>

      <Flex flexDirection='column' flexWrap='wrap' width='30%'>
        <Heading fontSize='2rem' fontFamily='Montserrat, sans-serif' textAlign='center'>Similares</Heading>
        <Flex flexWrap='wrap' justifyContent='center' style={{ gap: '1rem'}}>
        <For 
          of={movieSimilar}
          render={(item: any, index) => 
            <Flex key={index}>
              <CardLink 
                id={item.id} 
                title={item.title} 
                src={`${image}${item.poster_path}`}
                marginBottom='0'  
              />
            </Flex>
          }
        />
        </Flex>
      </Flex>
    </Flex>
    <Carrosel title="Relacionados" list={similar} />
   </>
  )
}