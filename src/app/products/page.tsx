import { ProductsPage } from '@/components/pages'

import { API, SERVER } from '@/utils/API'
import { Product } from '@/utils/ProductData'

const getProducts = () => SERVER.request<Product[]>(API.routes.products.list)

export default async function Products() {
  const prefetchProducts = await getProducts()
  return <ProductsPage prefetchProducts={prefetchProducts} />
}
