import React, { useMemo } from 'react'
import { useRouter } from 'next/navigation'

import { useProducts, useRecentlyViewedProducts } from '@/hooks'
import { Product } from '@/utils/ProductData'

import { ProductsBoard } from '@/components/templates'

interface ProductsPageProps {
  prefetchProducts?: Product[]
}

export const ProductsPage = ({ prefetchProducts = [] }: ProductsPageProps) => {
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
    <main className="mx-auto flex w-10/12 flex-col items-center p-8">
      <ProductsBoard
        products={productsData}
        onClickItem={handleClickProductCard}
      />
    </main>
  )
}
