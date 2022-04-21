import React from 'react'
import styles from "../../styles/OrderSummary.module.scss";
import OrderItem from './OrderItem';


export default function OrderSummary() {
  return (
    <div className={styles['container']}>
      <h1 className={styles['h1']}>Order Summary</h1>
      <hr className={styles['hr']} />
      <OrderItem quantity={2} name="Margherita" price={7.99} />
      <OrderItem quantity={1} name="Quattro Stagioni" price={19.98} />
      <hr className={styles['hr']} />
      <div className={styles['price-summary-entry']}>
        <h2 className={styles['h2']}>Subtotal</h2>
        <p className={styles['p']}>£27.97</p>
      </div>
      <div className={styles['price-summary-entry']}>
        <h2 className={styles['p']}>Delivery Fee</h2>
        <p className={styles['p']}>£2.50</p>
      </div>
      <div className={styles['price-summary-entry']}>
        <h2 className={styles['p']}>Service Charge</h2>
        <p className={styles['p']}>£0.50</p>
      </div>
      <div className={styles['price-summary-entry']}>
        <h2 className={styles['h2']}>Total</h2>
        <p className={styles['p']}>£30.97</p>
      </div>
    </div>
  )
}
