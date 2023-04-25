import { useOrders } from '@/hooks'
import { Order } from '@/utils/ProductData'
import { useMemo } from 'react'

interface OrdersPageProps {
  prefetchOrders?: Order[]
}

export const OrdersPage = ({ prefetchOrders = [] }: OrdersPageProps) => {
  const orders = useOrders(prefetchOrders)

  const ordersData = useMemo(() => orders.query.data ?? [], [orders.query.data])

  return (
    <main className="mx-auto flex w-full flex-col items-center p-4 sm:p-8 landscape:w-10/12">
      {ordersData.map((order) => (
        <div key={order.id}> {order.id}</div>
      ))}
    </main>
  )
}
