import { CartProduct } from '@/utils/ProductData'

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
    console.log(selectedProductId, ' ', newQuantity)
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
        <CartProductItem
          key={cartProduct.id}
          cartProduct={cartProduct}
          onChangeQuantity={handleChangeCartProductQuantity}
        />
      ))}
    </div>
  )
}
