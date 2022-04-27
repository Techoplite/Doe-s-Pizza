import React, { useState } from 'react'
import styles from "../../styles/OrderController.module.scss";
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addItem, removeItem } from '../redux/order/orderSlice';

export default function OrderController(props: {
  price: string,
  title: string
}) {
  const dispatch = useAppDispatch()
  const [quantity, setQuantity] = useState(0)
  const order = useAppSelector(state => state.order)
  const handleClick: React.MouseEventHandler<HTMLParagraphElement> = (event) => {
    switch ((event.target as HTMLParagraphElement).id) {
      case 'decrease':
        setQuantity((prevQuantity) => prevQuantity > 0 ? prevQuantity - 1 : 0)
        dispatch(removeItem(props.title))
        break
      case 'increase':
        setQuantity((prevQuantity) => prevQuantity + 1)
        dispatch(addItem({
          title: props.title,
          price: parseFloat(props.price)
        }))
        break
    }
  }
  const getQuantity = () => {
    let quantity: number
    order.items.map(item => {
      if (item.title === props.title) {
        quantity = item.quantity
      } else {
        quantity = 0
      }
    })
    return quantity
  }
  return (
    <div className={styles['container']}>
      <p
        id='decrease'
        className={`${styles['grid-item']} ${styles['symbol']}`}
        onClick={handleClick}
      >-</p>
      <p className={styles['grid-item']}>{getQuantity()}</p>
      <p
        id='increase'
        className={`${styles['grid-item']} ${styles['symbol']}`}
        onClick={handleClick}
      >+</p>
    </div>
  )
}
