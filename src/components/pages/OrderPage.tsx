import { Order } from '@/utils/ProductData'

interface OrderPageProps {
  prefetchOrder: Order
}

export const OrderPage = ({ prefetchOrder }: OrderPageProps) => {
  return <div>{prefetchOrder.id}</div>
}
