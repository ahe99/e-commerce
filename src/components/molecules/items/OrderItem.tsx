import { Divider } from '@/components/atoms'

import { Order } from '@/utils/ProductData'
import dayjs from 'dayjs'

interface OrderItemProps {
  order: Order
  onClick: (orderId: Order['id']) => void
}

export const OrderItem = ({
  order: { id, createdAt, products, totalPrice },
}: OrderItemProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-md border-2 border-slate-400 p-4 hover:cursor-pointer hover:opacity-40">
      <div className="flex flex-row justify-between font-bold">
        <div>{`id: ${id}`}</div>
        <div>{dayjs(createdAt).format('YYYY-MM-DD HH:mm:ss')}</div>
      </div>
      <Divider />
      <div>
        {products.map(({ id, price, quantity, name }) => (
          <div className="flex flex-row justify-between" key={id}>
            <div>{`${name} x${quantity}`}</div>
            <div>{price}</div>
          </div>
        ))}
        <div className="flex flex-row justify-between">
          <div>total</div>
          <div>{totalPrice}</div>
        </div>
      </div>
    </div>
  )
}
