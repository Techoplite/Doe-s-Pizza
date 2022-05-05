import Link from 'next/link';
import React from 'react'
import styles from "../../styles/OrderSummary.module.scss";
import { useAppSelector } from '../../redux/hooks';
import OrderDetails from './OrderDetails';
import OrderItem from './OrderItem';
import { OrderProps } from '../../types/order';
import { getAvailableTimes } from '../../utils/helpers';
import { PriceCheckTwoTone } from '@mui/icons-material';



export default function OrderSummary(props: OrderProps) {
  const items = useAppSelector(state => state.order.items)
  const formatPrice = (price: number) => price && price.toFixed(2)
  getAvailableTimes()
  return (
    <div className={styles['main-content']}>
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
          <p className={styles['p']}>£{formatPrice(props.subtotal)}</p>
        </div>
        <div className={styles['price-summary-entry']}>
          <h2 className={styles['p']}>Delivery Fee</h2>
          <p className={styles['p']}>£{formatPrice(props.deliveryFee)}</p>
        </div>
        <div className={styles['price-summary-entry']}>
          <h2 className={styles['p']}>Service Charge</h2>
          <p className={styles['p']}>£{formatPrice(props.serviceCharge)}</p>
        </div>
        <div className={styles['price-summary-entry']}>
          <h2 className={styles['h2']}>Total</h2>
          <p className={styles['p']}>£{formatPrice(props.total)}</p>
        </div>
        <Link href="/online-order" passHref >Go back to order</Link>
      </div>
      <OrderDetails data={props} />
    </div>
  )
}
