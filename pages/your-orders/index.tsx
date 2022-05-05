import React from 'react'
import { useAppSelector } from '../../redux/hooks';
import styles from "../../styles/YourOrders.module.scss";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import YourOrdersItem from '../components/YourOrdersItem';


export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const orders = useAppSelector(state => state.yourOrders.orders)
  const reversedOrders = [...orders].reverse()

  return (
    <div className={styles['main-content']}>
      <Navbar />
      <div className={styles['wrapper']}>
        <div className={styles['container']}>
          <h1 className={styles['h1']}>Your Orders</h1>
          <hr className={styles['hr']} />
          <>
            {reversedOrders.map(o => {
              return <div key={o.id}><YourOrdersItem item={o} /></div>
            })}
          </>
        </div>
      </div>
      <div className={styles['footer-wrapper']}>
        <Footer />
      </div>
    </div>
  )
}
