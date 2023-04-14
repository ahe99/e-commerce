import React, { useMemo } from 'react'

import { Product } from '@/utils/ProductData'

import { Carousel, ProductsBoard } from '@/components/templates'
import { useProducts } from '@/hooks'

const mockCarousel = [1, 2, 3, 4]

interface OverviewPageProps {
  prefetchProducts?: Product[]
}

export const OverviewPage = ({ prefetchProducts = [] }: OverviewPageProps) => {
  const products = useProducts(prefetchProducts)

  const productsData = useMemo(() => {
    return products.query.data ?? []
  }, [products.query.data])

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
      <ProductsBoard products={productsData} />
    </main>
  )
}
