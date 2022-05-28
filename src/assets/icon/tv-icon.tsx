import * as React from 'react'

export const TvICon = ({ color, ...props }: React.SVGProps<SVGSVGElement>) => {
  return(
    <>
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.85156 7.9401C4.39133 7.9401 4.01823 8.3132 4.01823 8.77344V17.9401C4.01823 18.4003 4.39133 18.7734 4.85156 18.7734H18.1849C18.6451 18.7734 19.0182 18.4003 19.0182 17.9401V8.77344C19.0182 8.3132 18.6451 7.9401 18.1849 7.9401H4.85156ZM2.35156 8.77344C2.35156 7.39273 3.47085 6.27344 4.85156 6.27344H18.1849C19.5656 6.27344 20.6849 7.39273 20.6849 8.77344V17.9401C20.6849 19.3208 19.5656 20.4401 18.1849 20.4401H4.85156C3.47085 20.4401 2.35156 19.3208 2.35156 17.9401V8.77344Z" 
      fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.76361 2.34955C7.08905 2.02411 7.61668 2.02411 7.94212 2.34955L11.5195 5.92696L15.0969 2.34955C15.4224 2.02411 15.95 2.02411 16.2755 2.34955C16.6009 2.67498 16.6009 3.20262 16.2755 3.52806L12.1088 7.69472C11.7833 8.02016 11.2557 8.02016 10.9303 7.69472L6.76361 3.52806C6.43817 3.20262 6.43817 2.67498 6.76361 2.34955Z" 
      fill={color}/>
      <path d="M9.52865 16.4404C9.38698 16.4404 9.23698 16.407 9.11198 16.3237C8.85365 16.1737 8.69531 15.8987 8.69531 15.607V11.0987C8.69531 10.7987 8.85365 10.5237 9.11198 10.382C9.37031 10.232 9.68698 10.232 9.94531 10.382L13.912 12.6404C14.1703 12.7904 14.337 13.0654 14.337 13.3654C14.337 13.6654 14.1786 13.9404 13.912 14.0904L9.94531 16.3487C9.81198 16.3987 9.67031 16.4404 9.52865 16.4404ZM9.82865 11.582V15.1154L12.9286 13.3487L9.82865 11.582Z" 
      fill={color}/>
    </svg>
    </>
  )
}