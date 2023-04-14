'use client'
import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

const queryClient = new QueryClient()

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ChakraProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </ChakraProvider>
      </CacheProvider>
    </QueryClientProvider>
  )
}
