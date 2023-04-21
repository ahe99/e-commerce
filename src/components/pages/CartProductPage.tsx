import { useMemo } from 'react'

import { CartProduct } from '@/utils/ProductData'
import { useCartProducts } from '@/hooks'

import { CartProductList } from '@/components/organisms'

interface CartProductPageProps {
  prefetchCartProducts?: CartProduct[]
}

export const CartProductPage = ({
  prefetchCartProducts = [],
}: CartProductPageProps) => {
  const cartProducts = useCartProducts(prefetchCartProducts)

  const cartProductsData = useMemo(
    () => cartProducts.query.data ?? [],
    [cartProducts.query.data],
  )
  const handleDeleteCartProduct = async (cartProductId: CartProduct['id']) => {
    await cartProducts.delete.mutateAsync(cartProductId)
  }
  const handleUpdateCartProductQuantity = async (
    selectedProductId: CartProduct['id'],
    newQuantity: number,
  ) => {
    const selectedCartProduct = cartProductsData.find(
      ({ id }) => id === selectedProductId,
    )

    if (selectedCartProduct) {
      await cartProducts.update.mutateAsync({
        ...selectedCartProduct,
        quantity: newQuantity,
      })
    }
  }

  return (
    <main className="mx-auto flex  w-10/12 flex-col items-center gap-8 p-8">
      <CartProductList
        cartProducts={cartProductsData}
        onDeleteCartProduct={handleDeleteCartProduct}
        onUpdateCartProductQuantity={handleUpdateCartProductQuantity}
      />
    </main>
  )
}
