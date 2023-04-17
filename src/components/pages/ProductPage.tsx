import { Product } from '@/utils/ProductData'

interface ProductPageProps {
  prefetchProduct: Product
}

export const ProductPage = ({ prefetchProduct }: ProductPageProps) => {
  return <div>{prefetchProduct.name}</div>
}
