import { Flex, Text } from "rebass"
import { FacebookICon } from "../../assets/icon/facebook-icon"
import { InstagramICon } from "../../assets/icon/instagram-icon"
import { LogoICon } from "../../assets/icon/logo-icon"
import { TitleLogo } from "../nav-bar/styles"
import { ContainerFooter, FooterStyle } from "./styles"

export const Footer = () => {
  return(
    <>
    <ContainerFooter>
      <FooterStyle>
      <Flex justifyContent='space-between' width='30%'>
        <Text fontWeight='700'>FEEDBACK</Text>
        <Text>|</Text>
        <Text fontWeight='700'>HELP</Text>
        <Text>|</Text>
        <Text fontWeight='700'>FAQ</Text>
      </Flex>
      <Flex height='100px' flexDirection='column' justifyContent='space-between' alignItems='center'>
        <Flex justifyContent='space-between' alignItems='center'> 
        <LogoICon/><TitleLogo>SCARLFIX</TitleLogo>
        </Flex>
        <Text color='#4F4E50'>2022 by Scarlate</Text>
      </Flex>
      <Flex width='30%' justifyContent='space-between' flexDirection='column' alignItems='center'>
        <Flex justifyContent='space-between' width='40%'>
        <Text fontWeight='700' color='#4F4E50'>FOLLOW</Text>
        <Text>|</Text>
        </Flex>
        <Flex width='20%' justifyContent='space-between'>
        <FacebookICon/>
        <InstagramICon/>
        </Flex>
      </Flex>
      </FooterStyle>
    </ContainerFooter>
    </>
  )

}