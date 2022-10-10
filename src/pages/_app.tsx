import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { LayoutProvider } from '../hooks/useLayout'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </ChakraProvider>
  )
}

export default MyApp
