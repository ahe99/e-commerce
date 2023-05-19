import Image from 'next/image'
import { Box } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Box className="relative aspect-[5/64] w-40 flex-shrink-0">
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
