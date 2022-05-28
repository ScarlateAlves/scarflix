import Link from 'next/link'
import React from 'react'
import { Flex, Text } from 'rebass'
import { FavoritosICon } from '../../../assets/icon/favoritos-icon'
import { HomeIcon } from '../../../assets/icon/homeIcon'
import { MoveICon } from '../../../assets/icon/move-icon'
import { TvICon } from '../../../assets/icon/tv-icon'
import { BoxLink } from './styles'

export const NavLink = () => {
  return(
    <>
      <Flex  style={{ gap: '1.5rem'}}>
        <Link href='/'>
          <BoxLink>
           <HomeIcon/><Text>Início</Text>
         </BoxLink>
        </Link>
        <Link href='/tv'>
          <BoxLink>
          <TvICon color='#807E81' />Tv
         </BoxLink>
         </Link>
        <Link href='/move'>
          <BoxLink>
            <MoveICon color='#807E81' /><Text>Filmes</Text>
         </BoxLink>
        </Link>
        <Link href='/'>
          <BoxLink>
           <FavoritosICon color='#807E81' /> Favoritos 
         </BoxLink>
        </Link>
      </Flex>
    </>
  )
}