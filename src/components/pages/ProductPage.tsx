import React, { useState, useMemo, useLayoutEffect } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

import { Product } from '@/utils/ProductData'
import {
  useProducts,
  useRecentlyViewedProducts,
  useCartProducts,
} from '@/hooks'

import { Divider } from '@/components/atoms'
import { QuantitySelector, ProductProfileCard } from '@/components/molecules'
import { ProductList } from '@/components/organisms'

interface ProductPageProps {
  prefetchProduct: Product
  prefetchRecentlyProducts: Product[]
}

export const ProductPage = ({
  prefetchProduct,
  prefetchRecentlyProducts,
}: ProductPageProps) => {
  const [quantity, setQuantity] = useState(1)

  const router = useRouter()

  const cart = useCartProducts()
  const recentlyViewedProducts = useRecentlyViewedProducts(
    prefetchRecentlyProducts,
  )
  const products = useProducts()

  const productsData = useMemo(() => {
    return products.query.data ?? []
  }, [products.query.data])

  const recentlyViewedProductsData = useMemo(
    () => recentlyViewedProducts.query.data ?? [],
    [recentlyViewedProducts.query.data],
  )

  useLayoutEffect(() => {
    //add product to recently view whenever the page is entered
    recentlyViewedProducts.create.mutate(prefetchProduct)
  }, [])

  const handleAddToCart = async () => {
    await cart.create.mutateAsync({ ...prefetchProduct, quantity })
  }

  const handleClickProductCard = async (productId: Product['id']) => {
    router.push(`products/${productId}`)
  }

  return (
    <main className="mx-auto flex w-full flex-col gap-8 p-4 sm:p-8 landscape:w-10/12">
      <ProductProfileCard product={prefetchProduct} />

      <div className="flex w-2/3 flex-row flex-wrap items-end gap-2 self-end">
        <div className="flex-1">
          <QuantitySelector
            value={quantity}
            minValue={1}
            maxValue={prefetchProduct.stock_quantity}
            onChange={(newValue) => setQuantity(newValue)}
          />
        </div>

        <Button
          variant="outline"
          className="flex-1 border-2 border-slate-600"
          leftIcon={<MdShoppingCart />}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </div>
      <Divider />
      <div className="text-2xl">Recently viewed</div>
      <ProductList
        products={recentlyViewedProductsData}
        onClickItem={handleClickProductCard}
      />
    </main>
  )
}
