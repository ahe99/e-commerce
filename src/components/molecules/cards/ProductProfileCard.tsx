import { Product } from '@/utils/ProductData'

interface ProductProfileCardProps {
  product: Product
}

//todo: find a better naming
export const ProductProfileCard = ({
  product: { id, name, category_name, description, price },
}: ProductProfileCardProps) => {
  return (
    <div className="grid grid-flow-row grid-cols-3 gap-4 rounded-md">
      <MockImage />
      <div className="col-span-2 flex flex-col">
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
const MockImage = () => {
  return (
    <div className="col-span-1 aspect-square w-full rounded-md bg-slate-600" />
  )
}
