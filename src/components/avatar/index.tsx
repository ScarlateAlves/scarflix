import  Image  from 'next/image'
import { Box, Flex } from 'rebass'
import { ArrowICon } from '../../assets/icon/arrow-icon'
import user from '../../assets/images/user.png'

interface AvatarProps {
  src?: any
  alt?: string
  width?: string
  height?: string
}

export const Avatar = ({ src, alt, width='43px', height='40'}: AvatarProps) => {
  const img = src ? src : user

  return(
    <>
    <Flex style={{ gap: '0.5rem'}} alignItems='center'>
      <Box style={{ borderRadius: '50%' }} backgroundColor='white' width={width}>
        <Image src={img} width={width} height={height} alt={alt}  />
      </Box>
      <ArrowICon/>
    </Flex>
    </>
  )
}