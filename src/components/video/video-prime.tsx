import React from 'react'
import { Flex } from 'rebass'

export const Video =( { id }: any ) => {
  const isMove = id ? id : 'lWcD2icgoGs'
  return(
    <>
     <Flex height='88vh' width='100%'>
    <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${isMove}`} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          >
        </iframe>
      
    </Flex>
    </>
  )
}