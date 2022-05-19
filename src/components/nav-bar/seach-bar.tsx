import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const SeachBar = () => {
  const router = useRouter()
  const [ search, setSearch ] = useState('')

  useEffect(() => {
    if(search) router.push(`/search/${search}`)
     else router.push(`/`)
    
  }, [search])

  return(
    <>
      <input 
        placeholder='buscar'
        value={search}
        onChange={(e: any) => setSearch(e.target.value)}
      />
    </>
  )
}