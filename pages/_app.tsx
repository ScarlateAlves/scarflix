import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from '../src/components/layout';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Montserrat
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
     <GlobalStyle />
    <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
     <Layout>
     <Component {...pageProps} />
     </Layout>
    </QueryClientProvider>
    </ThemeProvider>
    </>
  )
}

export default App
