import  Image  from 'next/image'
import { Box } from 'rebass'
import user from '../../assets/images/user.png'

interface AvatarProps {
  src?: any
  alt?: string
  width?: string
  height?: string
}

export const Avatar = ({ src, alt, width='30px', height='30'}: AvatarProps) => {
  const img = src ? src : user

  return(
    <>
    <Box backgroundColor='white' width={width}>
      <Image src={img} width={width} height={height} alt={alt}  />
    </Box>
    </>
  )
}