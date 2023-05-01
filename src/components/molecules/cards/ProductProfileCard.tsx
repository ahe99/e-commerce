import Image from 'next/image'

import { Product } from '@/utils/ProductData'

interface ProductProfileCardProps {
  product: Product
  quantity?: number
}

//todo: find a better naming
export const ProductProfileCard = ({
  product: { id, name, category_name, description, price, image },
}: ProductProfileCardProps) => {
  return (
    <div className="grid grid-flow-row grid-cols-4 gap-4">
      <div className="relative col-span-1 aspect-square rounded-md">
        <Image alt={name} src={image} fill className="object-contain" />
      </div>
      <div className="col-span-3 flex flex-col">
        <div className="flex flex-col">
          <div className="text-xl font-bold text-slate-800">{name}</div>
          <div className="italic text-slate-400">{category_name}</div>
          <div className="text-slate-600">{description}</div>
        </div>
        <div>{`$${price}`}</div>
      </div>
    </div>
  )
}
