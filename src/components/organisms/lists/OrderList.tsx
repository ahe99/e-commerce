import { motion } from 'framer-motion'

import { Divider } from '@/components/atoms'
import { OrderItem } from '@/components/molecules'

import { Order } from '@/utils/ProductData'
import { Fragment } from 'react'

interface OrderListProps {
  orders: Order[]
  onClickItem?: (productId: Order['id']) => void
}
export const OrderList = ({
  orders,
  onClickItem = () => {},
}: OrderListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 1,
        y: 0,
      }}
      transition={{ ease: 'easeInOut' }}
      className="flex flex-col"
    >
      {orders.map((order, index) => (
        <Fragment key={order.id}>
          {index !== 0 && <Divider className="my-4" />}
          <OrderItem order={order} onClick={() => onClickItem(order.id)} />
        </Fragment>
      ))}
    </motion.div>
  )
}
