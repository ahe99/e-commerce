import { API, SERVER } from '@/utils/API'
import { Product } from '@/utils/ProductData'

import { OverviewPage } from '@/components/pages'

const getProducts = () => SERVER.request<Product[]>(API.routes.products().list)

export default async function verview() {
  const prefetchProducts = await getProducts()

  return <OverviewPage prefetchProducts={prefetchProducts} />
}
