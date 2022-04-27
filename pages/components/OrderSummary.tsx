import Link from 'next/link';
import React from 'react'
import styles from "../../styles/OrderSummary.module.scss";
import { useAppSelector } from '../redux/hooks';
import OrderItem from './OrderItem';


export default function OrderSummary() {
  // TODO: on item click should redirect to order online page
  const items = useAppSelector(state => state.order.items)
  const getSubtotal = () => {
    let subtotal = 0
    items.map(item => {
      subtotal += item.price * item.quantity
    })
    return subtotal
  }
  const deliveryFee = 2.50
  const serviceCharge = 0.50
  const getTotal = () => {
    return getSubtotal() + deliveryFee + serviceCharge
  }
  return (
    <div className={styles['container']}>
      <h1 className={styles['h1']}>Order Summary</h1>
      <hr className={styles['hr']} />
      <ul className={styles['ul']}>
        {items.map(item => {
          return <li key={item.title} className={styles['li']}>
            <OrderItem
              quantity={item.quantity}
              name={item.title}
              price={item.price * item.quantity}
            />
          </li>
        })}
      </ul>
      <hr className={styles['hr']} />
      <div className={styles['price-summary-entry']}>
        <h2 className={styles['h2']}>Subtotal</h2>
        <p className={styles['p']}>£{getSubtotal().toFixed(2)}</p>
      </div>
      <div className={styles['price-summary-entry']}>
        <h2 className={styles['p']}>Delivery Fee</h2>
        <p className={styles['p']}>£{deliveryFee.toFixed(2)}</p>
      </div>
      <div className={styles['price-summary-entry']}>
        <h2 className={styles['p']}>Service Charge</h2>
        <p className={styles['p']}>£{serviceCharge.toFixed(2)}</p>
      </div>
      <div className={styles['price-summary-entry']}>
        <h2 className={styles['h2']}>Total</h2>
        <p className={styles['p']}>£{getTotal().toFixed(2)}</p>
      </div>
      <Link href="/online-order" passHref >Go back to order</Link>
    </div>
  )
}
