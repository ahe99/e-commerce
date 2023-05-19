import React, { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { Box } from '@chakra-ui/react'

import { Product, ImageType } from '@/utils/ProductData'

import { BannerImage } from '@/components/atoms'
import { Carousel, ProductsBoard } from '@/components/templates'
import { useProducts } from '@/hooks'

interface OverviewPageProps {
  prefetchProducts?: Product[]
  prefetchBanners?: ImageType[]
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
        {prefetchBanners.map((image, index) => (
          <BannerImage
            src={image.src}
            blurHash={image.blurHash}
            alt={image.src}
            key={index}
            className="h-full w-full"
          />
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
