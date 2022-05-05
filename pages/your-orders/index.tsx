import React from 'react'
import { useAppSelector } from '../../redux/hooks';
import styles from "../../styles/YourOrders.module.scss";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import YourOrdersItem from '../components/YourOrdersItem';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import { yellow } from '@mui/material/colors';


export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const orders = useAppSelector(state => state.yourOrders.orders)
  const reversedOrders = [...orders].reverse()

  return (
    <div className={styles['main-content']}>
      <Navbar />
      <div className={styles['wrapper']}>
        <div className={styles['page-title-wrapper']}>
          <PointOfSaleIcon sx={{ color: yellow[200], fontSize: 50 }} />
          <h1 className={styles['page-title']}>Your Orders</h1>
        </div>
        <div className={styles['container']}>
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
