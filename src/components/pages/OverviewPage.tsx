import React, { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { Product } from '@/utils/ProductData'

import { Carousel, ProductsBoard } from '@/components/templates'
import { useProducts } from '@/hooks'
import { Box } from '@chakra-ui/react'

const mockCarousel = [1, 2, 3, 4]

interface OverviewPageProps {
  prefetchProducts?: Product[]
  prefetchBanners?: string[]
}

export const OverviewPage = ({
  prefetchProducts = [],
  prefetchBanners = [],
}: OverviewPageProps) => {
  const router = useRouter()

  const products = useProducts(prefetchProducts)

  const productsData = useMemo(() => {
    return products.query.data ?? []
  }, [products.query.data])

  const handleClickProductCard = async (productId: Product['id']) => {
    router.push(`products/${productId}`)
  }

  return (
    <main className="mx-auto flex w-full flex-col items-center gap-8 p-4 sm:p-8 ">
      <Carousel
        className="aspect-video w-full overflow-hidden rounded-md"
        autoPlay
        allowPan
      >
        {prefetchBanners.map((src, index) => (
          <div
            key={src}
            className="cursor-pointer overflow-hidden rounded-md bg-slate-50"
          >
            <Image
              alt={src}
              src={src}
              fill
              className="object-cover"
              draggable={false}
            />
          </div>
        ))}
      </Carousel>
      <Box className="landscape:w-10/12">
        <ProductsBoard
          products={productsData}
          onClickItem={handleClickProductCard}
        />
      </Box>
    </main>
  )
}
