import { OrderPage } from '@/components/pages'

import { API, SERVER } from '@/utils/API'
import { Order } from '@/utils/ProductData'

const getSpecificOrder = (orderId: Order['id']) =>
  SERVER.request<Order>(API.routes.orders.data(orderId))

export default async function OrderRoute({
  params: { orderId },
}: {
  params: { orderId: Order['id'] }
}) {
  const prefetchOrder = await getSpecificOrder(orderId)
  return <OrderPage prefetchOrder={prefetchOrder} />
}
