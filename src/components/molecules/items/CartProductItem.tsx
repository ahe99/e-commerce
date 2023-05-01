import Image from 'next/image'

import { CartProduct } from '@/utils/ProductData'

import { QuantitySelector } from '../interactive/QuantitySelector'

interface CartProductItemProps {
  cartProduct: CartProduct
  onChangeQuantity?: (
    cartProductId: CartProduct['id'],
    newQuantity: number,
  ) => void
  onClick?: (cartProductId: CartProduct['id']) => void
}

//todo: find a better naming
export const CartProductItem = ({
  cartProduct: {
    id,
    name,
    category_name,
    description,
    price,
    stock_quantity,
    quantity,
    image,
  },
  onChangeQuantity = () => {},
  onClick = () => {},
}: CartProductItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-flow-row grid-cols-3 gap-4 rounded-md">
        <div className="relative col-span-1 aspect-square rounded-md">
          <Image alt={name} src={image} fill className="object-contain" />
        </div>
        <div className="col-span-2 flex flex-col justify-between">
          <div
            className="flex flex-col hover:cursor-pointer hover:opacity-40"
            onClick={() => onClick(id)}
          >
            <div className="text-xl font-bold text-slate-800 ">{name}</div>
            <div className="italic text-slate-400">{category_name}</div>
            <div className="text-slate-600 line-clamp-2">{description}</div>
          </div>
          <div className="flex flex-col">
            <div className="flex-shrink-0 text-lg font-bold">{`$${price}`}</div>
            <QuantitySelector
              value={quantity}
              minValue={0}
              maxValue={stock_quantity}
              onChange={(newQuantity) => onChangeQuantity(id, newQuantity)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
const MockImage = () => {
  return (
    <div className="col-span-1 aspect-square w-full rounded-md bg-slate-600" />
  )
}
