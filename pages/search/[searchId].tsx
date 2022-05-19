import { NextPage } from "next"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Flex } from "rebass";
import { CardLink } from "../../src/components/card/card-link";
import { GET_SEACH } from "../../src/service/auth";
import { image } from "../../src/utils";

const Search: NextPage = () => {
  const router = useRouter()
  const { searchId } = router.query

  const [ search, setSearch] = useState<any>()

  async function fetchSearchMult(query: any) {
    const mult = `/multi`
    const { url, options } = GET_SEACH({ url: mult, query: query})
    const response = await fetch(url, options)
    const json = await response.json()
    setSearch(json)
  }

  useEffect(() => {
    if(searchId){
      fetchSearchMult(searchId)
    }
  }, [ searchId])

  return(
    <>
    <Flex flexWrap='wrap' justifyContent='center'>
    { search?.results.map((item: any) => (
          <Flex m='5px' key={item.id}>
             <CardLink id={item.id} src={`${image}${item.poster_path}`} title={item.title ? item.title : item.name} />
          </Flex>
        ))}
    </Flex>
    </>
  )
}

export default Search;