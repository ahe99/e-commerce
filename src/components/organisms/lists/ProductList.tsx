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
    <div className="grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onClick={onClickItem} />
      ))}
    </div>
  )
}
