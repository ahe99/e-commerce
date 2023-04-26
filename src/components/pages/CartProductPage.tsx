import { useMemo } from 'react'
import { Button } from '@chakra-ui/react'
import { MdArrowRight } from 'react-icons/md'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()

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

  const handleClickCartProductItem = async (
    cartProductId: CartProduct['id'],
  ) => {
    router.push(`products/${cartProductId}`)
  }

  const totalPrice = cartProductsData
    .map(({ price }) => price)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  return (
    <main className="mx-auto flex w-full flex-col items-stretch p-4 sm:p-8 landscape:w-10/12">
      <h1 className="mb-8 text-3xl">Shopping Cart</h1>
      <CartProductList
        cartProducts={cartProductsData}
        onDeleteCartProduct={handleDeleteCartProduct}
        onUpdateCartProductQuantity={handleUpdateCartProductQuantity}
        onClickitem={handleClickCartProductItem}
      />
      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between text-lg font-bold">
          <div>Total</div>
          <div>{`$${totalPrice}`}</div>
        </div>
        <Button
          variant="outline"
          className="w-max items-center self-end border-2 border-slate-800 text-slate-800"
        >
          Checkout
          <MdArrowRight className="text-xl" />
        </Button>
      </div>
    </main>
  )
}
