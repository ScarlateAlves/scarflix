import  Image  from 'next/image'
import { useState } from 'react'
import { For } from 'react-extras'
import { Button, Flex, Heading, Text } from "rebass"
import seta from '../../assets/images/seta.png'
import { ContainerGeneros, ModalGeneros, ContaineButton } from './stlyles'

interface GenreProps {
  genre?: any
  title?: string
}
export const ButtonGeneros = ({ genre, title }:  GenreProps) => {
  const [ togle, setTogle ] = useState(false)

  const HandleTogle = () => {
    setTogle(!togle)
  }


  return(
    <>
      <ContainerGeneros>
        <Heading fontSize='2.2rem'>{title}</Heading>
        <ContaineButton>
       <Button onClick={HandleTogle} backgroundColor='black' style={{  cursor: 'pointer', border: 'solid 1px white'}} color='black'>
         <Flex color='white' alignItems='center' style={{ gap: '1rem'}}>
         Gêneros 
         <Flex style={{ borderRadius: '100px', border: 'solid 1px white'}} backgroundColor='white'>
         <Image src={seta} width={25} height={20}  />
         </Flex>
         </Flex>
         </Button>
         <ModalGeneros visible={togle}>
           <Flex flexWrap='wrap' style={{ gap: '1.5rem'}}>
           <For of={genre} render={(item : any, index) => <Text style={{ cursor: 'pointer'}} key={index}>{item.name}</Text> } />
           </Flex>
         </ModalGeneros>
         </ContaineButton>
     </ContainerGeneros>
    </>
  )
}