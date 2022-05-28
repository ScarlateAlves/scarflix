import Link from 'next/link'
import React, { useState } from 'react'
import { Heading, Flex } from 'rebass'
import { LogoICon } from '../../assets/icon/logo-icon'
import { SeachICon } from '../../assets/icon/seach-icon'
import { Avatar } from '../avatar'
import { NavLink } from './link/nav-link'
import { SeachBar } from './seach-bar'
import { NavBarContainer, TitleLogo } from './styles'

export const NavBar = () => {

  return(
    <NavBarContainer>
      <Flex style={{ gap: '3rem'}} alignItems='center'>
       <Link href='/'>
       <Flex style={{ cursor: 'pointer' }} alignItems='center'>
        <LogoICon/>
        <TitleLogo>SCARFLIX</TitleLogo>
        </Flex>
       </Link>
        <NavLink />
      </Flex>
      <Flex style={{ gap: '3rem'}} >
      <SeachBar />
      <Avatar />
      </Flex>
    </NavBarContainer>
  )
}

