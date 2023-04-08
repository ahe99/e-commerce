import { motion } from 'framer-motion'

import { ProductCard } from '@/components/molecules'

import { Product } from '@/utils/ProductData'

interface ProductListProps {
  products: Product[]
}
export const ProductList = ({ products }: ProductListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 1,
        y: 0,
      }}
      transition={{ ease: 'easeInOut' }}
      className="grid grid-flow-row grid-cols-2 gap-2 p-2 sm:grid-cols-3"
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </motion.div>
  )
}
