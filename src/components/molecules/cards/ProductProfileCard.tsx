import { ProductImage } from '@/components/atoms'

import { Product } from '@/utils/ProductData'

interface ProductProfileCardProps {
  product: Product
  quantity?: number
}

//todo: find a better naming
export const ProductProfileCard = ({
  product: {
    id,
    name,
    category_name,
    description,
    price,
    image: { src, blurHash },
  },
}: ProductProfileCardProps) => {
  return (
    <div className="grid grid-flow-row grid-cols-4 gap-4">
      <ProductImage
        className="col-span-1"
        src={src}
        blurHash={blurHash}
        alt={name}
      />

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
