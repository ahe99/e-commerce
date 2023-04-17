import { motion } from 'framer-motion'

import { ProductCard } from '@/components/molecules'

import { Product } from '@/utils/ProductData'

interface ProductListProps {
  products: Product[]
  onClickItem?: (productId: Product['id']) => void
}
export const ProductList = ({
  products,
  onClickItem = () => {},
}: ProductListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 1,
        y: 0,
      }}
      transition={{ ease: 'easeInOut' }}
      className="grid grid-flow-row grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          onClick={() => onClickItem(product.id)}
        />
      ))}
    </motion.div>
  )
}
