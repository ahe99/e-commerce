import { motion } from 'framer-motion'

import { ProductImage } from '@/components/atoms'

import { Product } from '@/utils/ProductData'

interface ProductCardProps {
  product: Product
  onClick?: (productId: Product['id']) => void
}

export const ProductCard = ({
  product: {
    id,
    name = '',
    price,
    image: { src },
  },
  onClick = () => {},
}: ProductCardProps) => {
  return (
    <motion.div
      className="relative flex flex-col gap-2 hover:cursor-pointer hover:opacity-40"
      whileTap={{ scale: 0.9 }}
      onClick={() => onClick(id)}
    >
      <ProductImage src={src} alt={name} />

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
