import React, { useState } from 'react'
import styles from "../../styles/OrderController.module.scss";
import { useAppDispatch } from '../redux/hooks';
import { addItem, removeItem } from '../redux/order/orderSlice';

export default function OrderController(props: {
  price: string,
  title: string
}) {
  const dispatch = useAppDispatch()
  const [quantity, setQuantity] = useState(0)
  const handleClick: React.MouseEventHandler<HTMLParagraphElement> = (event) => {
    switch ((event.target as HTMLParagraphElement).id) {
      case 'decrease':
        setQuantity((prevQuantity) => prevQuantity > 0 ? prevQuantity - 1 : 0)
        dispatch(removeItem(props.title))
        break
      case 'increase':
        setQuantity((prevQuantity) => prevQuantity + 1)
        dispatch(addItem(props.title))
        break
    }
  }
  return (
    <div className={styles['container']}>
      <p
        id='decrease'
        className={`${styles['grid-item']} ${styles['symbol']}`}
        onClick={handleClick}
      >-</p>
      <p className={styles['grid-item']}>{quantity}</p>
      <p
        id='increase'
        className={`${styles['grid-item']} ${styles['symbol']}`}
        onClick={handleClick}
      >+</p>
    </div>
  )
}
