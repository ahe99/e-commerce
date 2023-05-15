import Image from 'next/image'
import { Box } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Box className="relative h-16 w-40 overflow-hidden rounded-md">
      <Image alt="logo" src="/logo.png" fill className="object-contain" />
    </Box>
  )
}
