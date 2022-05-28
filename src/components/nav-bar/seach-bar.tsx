import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Input } from '@rebass/forms'
import { Flex } from 'rebass'
import { SeachICon } from '../../assets/icon/seach-icon'
import { ContainerSeach, InputSeach, SeachIconLupa } from './styles'

export const SeachBar = () => {
  const router = useRouter()
  const [ search, setSearch ] = useState('')
  const [ display, setDisplay ] = useState(false)

  const HandleDisplay = () => {
    setDisplay(!display)
  }

  useEffect(() => {
    if(search) router.push(`/search/${search}`)
     else router.push(`/`)
    
  }, [search])

  return(
    <ContainerSeach border={display}>
       <SeachIconLupa onClick={HandleDisplay}>
      <SeachICon/>
      </SeachIconLupa>
      <InputSeach 
        placeholder='Buscar' 
        value={search}
        onChange={(e: any) => setSearch(e.target.value)}
        display={display}
      />
     
    </ContainerSeach>
  )
}