import  Image  from 'next/image'
import { useRouter } from 'next/router'
import { Container, Item, Imagem, ContainerImage, CartStyles } from "./styles"
import add from '../../assets/images/add.png'
import inferior from '../../assets/images/inferior.png'
import play from '../../assets/images/botao-play.png'
import { Flex, Heading } from 'rebass'


interface CardProps {
  src?: any
  title?: string
  id?: any
}
export const CardLink = ({ src, title, id }: CardProps) => {
  const router = useRouter()
  
  return(
    <>
    <Container>
      <Item>
        <Imagem src={src}/>
        <ContainerImage>
          <Heading fontSize='1rem' my='5px'>{title}</Heading>
        <Flex mt='10px' justifyContent='space-between' style={{ gap: '0.7rem'}}>
          <Flex style={{ gap: '1rem'}}>
            <CartStyles>
            <Image src={play} width='30px' height='30px' alt='img'  />
            </CartStyles>
            <CartStyles>
            <Image src={add} width='30px' height='30px' alt='img'  />
            </CartStyles>
          </Flex>
          <Flex>
            <CartStyles onClick={() => router.push(`/move/${id}`)}>
            <Image src={inferior} width='30px' height='30px' alt='img'  />
            </CartStyles>
          </Flex>
       </Flex>
        </ContainerImage>
      </Item>
    </Container>
    </>
  )
}