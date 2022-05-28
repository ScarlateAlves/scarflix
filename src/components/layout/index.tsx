import React from 'react'
import { Footer } from '../footer'
import { NavBar } from '../nav-bar'
import { LayoutStyles } from './styles'

interface LayoutProps {
  children: any
}
export const Layout = ({ children }: LayoutProps) => {
  return(
    <>
    <NavBar />
     <LayoutStyles>
     { children }
     </LayoutStyles>
     <Footer/>
    </>
  )
}