import  Image  from 'next/image'
import { useRouter } from 'next/router'
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
  const router = useRouter()

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 200){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  

  const HandleTogle = () => {
    setTogle(!togle)
  }


  return(
    <>
      <ContainerGeneros background={colorChange}>
        <Heading color='#fff' fontFamily='Montserrat, sans-serif' fontSize='38px'>{title}</Heading>
        <ContaineButton>
       <Button onClick={HandleTogle} backgroundColor='black' style={{  cursor: 'pointer', border: 'solid 1px white'}} color='black'>
         <Flex color='white' alignItems='center' style={{ gap: '1rem'}}>
          <Text>Gêneros</Text>
         <Flex style={{ borderRadius: '100px', border: 'solid 1px white'}} backgroundColor='white'>
         <Image src={seta} width={25} height={20}  />
         </Flex>
         </Flex>
         </Button>
         <ModalGeneros visible={togle}>
           <Flex flexWrap='wrap' style={{ gap: '1.5rem'}}>
           <For 
            of={genre} 
            render={(item : any, index) => 
            <Text 
              onClick={() => router.push(`/genre/${item.id}?bc=${router.asPath} `)} 
              style={{ cursor: 'pointer'}} key={index}>{item.name}
              </Text> 
            } 
            />
           </Flex>
           
         </ModalGeneros>
         </ContaineButton>
     </ContainerGeneros>
    </>
  )
}