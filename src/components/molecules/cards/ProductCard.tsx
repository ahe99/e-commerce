import { motion } from 'framer-motion'
import Image from 'next/image'

import { Product } from '@/utils/ProductData'

interface ProductCardProps {
  product: Product
  onClick?: (productId: Product['id']) => void
}

export const ProductCard = ({
  product: { id, name = '', price, image },
  onClick = () => {},
}: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ opacity: 0.4 }}
      className="relative flex flex-col gap-2 hover:cursor-pointer"
      onClick={() => onClick(id)}
    >
      <div className="relative aspect-square rounded-md">
        <Image alt={name} src={image} fill className="object-contain" />
      </div>
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
