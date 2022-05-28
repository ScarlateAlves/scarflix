import React from 'react'
import { Flex } from 'rebass'

interface VideoProps {
  id: any
  width?: string;
  height?: string;
  marginBottom?: string
}

export const Video =( { id, width, height, marginBottom }: VideoProps ) => {
  return(
    <>
     <Flex 
      mb={marginBottom ?? '4.5rem'} 
      height={ height ?? '82vh'} 
      width={width ?? '100%'}
    >
    <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${id}`} 
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