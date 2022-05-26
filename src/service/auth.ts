import { parseCookies } from 'nookies'

export const API_URL ='https://api.themoviedb.org/3'
export const key = '8a2b34842b0c4b7aeae35dadaea14394'
export  const { 'scarflix.token' : toke } = parseCookies() //pegando token do cookie


export function USER_tOKEN(){
  return {
    url: API_URL + '/authentication/token/new?api_key=' + key,
    options: {
      method: 'GET',
    }
  }
}

export function USER_GET(){
  return {
    url: `${API_URL}/discover/movie?api_key=${key}`,
    options: {
      method: 'GET',
      header: { 
        Authorization: `Bearer ${toke}`,
        'Content-Type': 'application/json;charset=utf-8'
      },
    }
  }
}

export function USER_GET_GENRE(type: string){
  return {
    url: `${API_URL}/genre/${type}/list?api_key=${key}`,
    options: {
      method: 'GET',
      header: { 
        Authorization: `Bearer ${toke}`,
        'Content-Type': 'application/json;charset=utf-8'
      },
    }
  }
}


export function GET_MOVE(movie_id: string){
  return {
    url: `${API_URL}/movie${movie_id}?api_key=${key}`,
    options: {
      method: 'GET',
      header: { 
        Authorization: `Bearer ${toke}`,
        'Content-Type': 'application/json;charset=utf-8'
      },
    }
  }
}

export function GET_TV(tv: string){
  return {
    url: `${API_URL}/tv${tv}?api_key=${key}`,
    options: {
      method: 'GET',
      header: { 
        Authorization: `Bearer ${toke}`,
        'Content-Type': 'application/json;charset=utf-8'
      },
    }
  }
}

interface SeachProps {
  url: string
  query?: string
}

export function GET_SEACH({ url, query}: SeachProps){
  return {
    url: `https://api.themoviedb.org/3/search${url}?api_key=${key}&query=${query}`,
    options: {
      method: 'GET',
      header: { 
        Authorization: `Bearer ${toke}`,
        'Content-Type': 'application/json;charset=utf-8'
      },
    }
  }
}

export function GET(tv: string){
  return {
    url: `${API_URL}${tv}?api_key=${key}`,
    options: {
      method: 'GET',
      header: { 
        Authorization: `Bearer ${toke}`,
        'Content-Type': 'application/json;charset=utf-8'
      },
    }
  }
}

