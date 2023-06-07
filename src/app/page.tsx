import { API, SERVER } from '@/utils/API'
import { Product } from '@/utils/ProductData'
import { ImageType } from '@/utils/Image'

import { OverviewPage } from '@/components/pages'

const getProducts = () => SERVER.request<Product[]>(API.routes.products.list)

const getBanners = () => SERVER.request<ImageType[]>(API.routes.banners.list)

export default async function overview() {
  const prefetchProducts = await getProducts()
  const prefetchBanners = await getBanners()

  return (
    <OverviewPage
      prefetchProducts={prefetchProducts}
      prefetchBanners={prefetchBanners}
    />
  )
}
