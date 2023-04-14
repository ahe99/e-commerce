import React, { useMemo } from 'react'

import { useProducts } from '@/hooks'
import { Product } from '@/utils/ProductData'

import { ProductsBoard } from '@/components/templates'

interface ProductsPageProps {
  prefetchProducts?: Product[]
}

export const ProductsPage = ({ prefetchProducts = [] }: ProductsPageProps) => {
  const products = useProducts(prefetchProducts)

  const productsData = useMemo(() => {
    return products.query.data ?? []
  }, [products.query.data])

  return (
    <main className="mx-auto flex w-10/12 flex-col items-center gap-8 p-8">
      <ProductsBoard products={productsData} />
    </main>
  )
}
