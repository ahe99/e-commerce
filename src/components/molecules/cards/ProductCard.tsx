import { motion } from 'framer-motion'

import { Product } from '@/utils/ProductData'

interface ProductCardProps extends Partial<Product> {
  onClick?: () => void
}
export const ProductCard = ({
  name = '',
  price,
  onClick = () => {},
}: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ opacity: 0.4 }}
      className="flex h-56 flex-col gap-2 rounded-md hover:cursor-pointer"
      onClick={onClick}
    >
      <MockImage />
      <div className="flex flex-col">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap font-bold">
          {name}
        </div>
        <div>{`$${price}`}</div>
      </div>
    </motion.div>
  )
}
export default ProductCard
const MockImage = () => (
  <div className="w-full flex-1 rounded-md bg-slate-600" />
)
