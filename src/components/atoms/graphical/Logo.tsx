import Image from 'next/image'
import { Box } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Box className="relative h-16 w-40 flex-shrink-0">
      <Image
        alt="logo"
        src="/logo.png"
        sizes="100% 100%"
        fill
        className="object-contain"
        priority={true}
      />
    </Box>
  )
}
