import React, { useMemo } from 'react'
import { useRouter } from 'next/navigation'

import { useProducts } from '@/hooks'
import { Product } from '@/utils/ProductData'

import { ProductsBoard } from '@/components/templates'

interface ProductsPageProps {
  prefetchProducts?: Product[]
}

export const ProductsPage = ({ prefetchProducts = [] }: ProductsPageProps) => {
  const router = useRouter()

  const products = useProducts(prefetchProducts)

  const productsData = useMemo(() => {
    return products.query.data ?? []
  }, [products.query.data])

  const handleClickProductCard = async (productId: Product['id']) => {
    router.push(`products/${productId}`)
  }

  return (
    <main className="mx-auto flex w-full flex-col items-stretch p-4 sm:p-8">
      <h1 className="mb-8 text-3xl">All Products</h1>
      <ProductsBoard
        products={productsData}
        onClickItem={handleClickProductCard}
      />
    </main>
  )
}
