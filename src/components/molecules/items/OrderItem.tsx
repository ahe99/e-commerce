import dayjs from 'dayjs'

import { Order } from '@/utils/ProductData'

interface OrderItemProps {
  order: Order
  onClick: (orderId: Order['id']) => void
}

export const OrderItem = ({
  order: { id, createdAt, products, totalPrice },
  onClick = () => {},
}: OrderItemProps) => {
  return (
    <div
      className="flex flex-col gap-2 rounded-md border-4 border-dashed border-slate-400 p-4 hover:cursor-pointer hover:opacity-40"
      onClick={() => onClick(id)}
    >
      <div className="flex flex-row justify-between font-bold">
        <div>{`id: ${id}`}</div>
        <div>{dayjs(createdAt).format('YYYY-MM-DD HH:mm:ss')}</div>
      </div>

      <hr className="w-full border-t-4 border-dashed border-slate-400" />

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
