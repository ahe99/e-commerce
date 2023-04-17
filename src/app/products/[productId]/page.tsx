import { ProductPage } from '@/components/pages'

import { API, SERVER } from '@/utils/API'
import { Product } from '@/utils/ProductData'

const getSpecificProduct = (productId: Product['id']) =>
  SERVER.request<Product>(API.routes.products(productId).data)

export default async function ProductRoute({
  params: { productId },
}: {
  params: { productId: Product['id'] }
}) {
  const prefetchProduct = await getSpecificProduct(productId)
  return <ProductPage prefetchProduct={prefetchProduct} />
}
