import React, { useState, useMemo, use } from 'react'
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

  const handleAddToCart = async () => {
    await cart.create.mutateAsync({ ...prefetchProduct, quantity })
  }

  const handleClickProductCard = async (productId: Product['id']) => {
    const newViewedProduct = productsData.find(({ id }) => id === productId)
    if (newViewedProduct) {
      await recentlyViewedProducts.create.mutateAsync(newViewedProduct)
    }

    router.push(`products/${productId}`)
  }

  return (
    <main className="mx-auto flex w-10/12 flex-col gap-8 py-16">
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
