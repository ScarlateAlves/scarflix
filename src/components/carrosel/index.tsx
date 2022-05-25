import React from 'react'

import { Heading } from 'rebass'
import { CardLink } from '../card/card-link'
import { MultipleItems } from '../scroll/scroll-lateral'
import { image } from '../../utils/index'

interface CarroselProps {
  title?: string
  name?: string
  list: any | []
}

export const Carrosel = ({ title, list }: CarroselProps) => {
 return(
  <>
  <Heading>{title}</Heading>
   {list ?
    <MultipleItems>
    { list.map((item: any) => (
        <CardLink id={item.id} key={item.id} src={`${image}${item.poster_path}`} title={item.title ? item.title : item.name}/>
       ))}
    </MultipleItems>
    :
    '...carregando'
   }
 </>
 )
}