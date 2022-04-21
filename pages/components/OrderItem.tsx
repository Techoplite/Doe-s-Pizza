import React from 'react'
import styles from "../../styles/OrderItem.module.scss";


export default function OrderItem(props: {
  quantity: number,
  name: string,
  price: number

}) {
  return (
    <div className={styles['container']}>
      <div className={styles['quantity']}>{props.quantity}</div>
      <div className={styles['item-info']}>{props.name}</div>
      <div className={styles['item-info']}>£{props.price}</div>
    </div>
  )
}
