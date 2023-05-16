import { notFound } from 'next/navigation'

import { ProductPage } from '@/components/pages'

import { API, SERVER } from '@/utils/API'
import { Product } from '@/utils/ProductData'

const getSpecificProduct = (productId: Product['id']) =>
  SERVER.request<Product>(API.routes.products.data(productId))

const getRecentlyViewedProducts = () =>
  SERVER.request<Product[]>(API.routes.recently.list)

export default async function ProductRoute({
  params: { productId },
}: {
  params: { productId: Product['id'] }
}) {
  const prefetchProduct = await getSpecificProduct(productId)
  const prefetchRecentlyProducts = await getRecentlyViewedProducts()

  const notFoundProduct = !prefetchProduct?.id
  if (notFoundProduct) {
    notFound()
  }

  return (
    <ProductPage
      prefetchProduct={prefetchProduct}
      prefetchRecentlyProducts={prefetchRecentlyProducts}
    />
  )
}
