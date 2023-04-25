import { useMemo } from 'react'

import { OrderList } from '@/components/organisms'

import { useOrders } from '@/hooks'
import { Order } from '@/utils/ProductData'

interface OrdersPageProps {
  prefetchOrders?: Order[]
}

export const OrdersPage = ({ prefetchOrders = [] }: OrdersPageProps) => {
  const orders = useOrders(prefetchOrders)

  const ordersData = useMemo(() => orders.query.data ?? [], [orders.query.data])

  return (
    <main className="mx-auto flex w-full flex-col items-stretch p-4 sm:p-8 landscape:w-10/12">
      <h1 className="mb-8 text-3xl">History Orders</h1>
      <OrderList orders={ordersData} onClickItem={console.log} />
    </main>
  )
}
