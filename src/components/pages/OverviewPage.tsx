import React, { useMemo } from 'react'
import { useRouter } from 'next/navigation'

import { Product } from '@/utils/ProductData'

import { Carousel, ProductsBoard } from '@/components/templates'
import { useProducts, useRecentlyViewedProducts } from '@/hooks'

const mockCarousel = [1, 2, 3, 4]

interface OverviewPageProps {
  prefetchProducts?: Product[]
}

export const OverviewPage = ({ prefetchProducts = [] }: OverviewPageProps) => {
  const router = useRouter()

  const recentlyViewedProducts = useRecentlyViewedProducts()
  const products = useProducts(prefetchProducts)

  const productsData = useMemo(() => {
    return products.query.data ?? []
  }, [products.query.data])

  const handleClickProductCard = async (productId: Product['id']) => {
    const newViewedProduct = productsData.find(({ id }) => id === productId)
    if (newViewedProduct) {
      await recentlyViewedProducts.create.mutateAsync(newViewedProduct)
    }

    router.push(`products/${productId}`)
  }

  return (
    <main className="mx-auto flex  w-10/12 flex-col items-center gap-8 p-8">
      <Carousel
        className="aspect-video w-full overflow-hidden rounded-md"
        autoPlay
        allowPan
      >
        {mockCarousel.map((item, index) => (
          <div
            key={index}
            className={`h-full w-full cursor-pointer ${
              index % 2 ? 'bg-stone-400' : 'bg-slate-400'
            }`}
          />
        ))}
      </Carousel>
      <ProductsBoard
        products={productsData}
        onClickItem={handleClickProductCard}
      />
    </main>
  )
}
