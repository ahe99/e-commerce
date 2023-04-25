'use client'
import { Box, CircularProgress } from '@chakra-ui/react'

export default function loading() {
  return (
    <Box className="flex aspect-square w-full items-center justify-center">
      <CircularProgress isIndeterminate color="" />
    </Box>
  )
}
