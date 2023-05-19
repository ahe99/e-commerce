'use client'

import { Spinner } from '@chakra-ui/react'

export const LoadingPage = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center bg-white p-4 pb-4 sm:p-8">
      <Spinner size="xl" />
    </main>
  )
}
