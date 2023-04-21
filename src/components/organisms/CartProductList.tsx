import { Fragment } from 'react'

import { CartProduct } from '@/utils/ProductData'

import { Divider } from '@/components/atoms'
import { CartProductItem } from '@/components/molecules'

interface CartProductListProps {
  cartProducts?: CartProduct[]
  onUpdateCartProductQuantity?: (
    selectedProductId: CartProduct['id'],
    newQuantity: number,
  ) => void
  onDeleteCartProduct?: (selectedProductId: CartProduct['id']) => void
}

export const CartProductList = ({
  cartProducts = [],
  onDeleteCartProduct = () => {},
  onUpdateCartProductQuantity = () => {},
}: CartProductListProps) => {
  const handleChangeCartProductQuantity = (
    selectedProductId: CartProduct['id'],
    newQuantity: number,
  ) => {
    if (newQuantity === 0) {
      handleRemoveCartProduct(selectedProductId)
    } else {
      onUpdateCartProductQuantity(selectedProductId, newQuantity)
    }
  }

  const handleRemoveCartProduct = (selectedProductId: CartProduct['id']) => {
    //to add: confirm modal
    onDeleteCartProduct(selectedProductId)
  }

  return (
    <div className="flex flex-col">
      {cartProducts.map((cartProduct) => (
        <Fragment key={cartProduct.id}>
          <CartProductItem
            cartProduct={cartProduct}
            onChangeQuantity={handleChangeCartProductQuantity}
          />
          <Divider className="my-4" />
        </Fragment>
      ))}
    </div>
  )
}
