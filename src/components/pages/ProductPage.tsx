import React, { useState, useMemo } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { Button } from '@chakra-ui/react'

import { Product } from '@/utils/ProductData'
import { useRecentlyViewedProducts } from '@/hooks'

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

  const recentlyViewedProducts = useRecentlyViewedProducts(
    prefetchRecentlyProducts,
  )

  const recentlyViewedProductsData = useMemo(
    () => recentlyViewedProducts.query.data ?? [],
    [recentlyViewedProducts.query.data],
  )

  const handleAddToCart = () => {
    console.log(prefetchProduct, quantity)
  }

  return (
    <main className="mx-auto flex w-10/12 flex-col items-center gap-8 py-16">
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
      <ProductList products={recentlyViewedProductsData} />
    </main>
  )
}
