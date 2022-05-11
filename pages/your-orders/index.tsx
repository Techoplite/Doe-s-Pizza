import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from "../../styles/YourOrders.module.scss";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import YourOrdersItem from '../components/YourOrdersItem';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import { yellow } from '@mui/material/colors';
import { setNavBackground } from '../../redux/navBackground/navBackgroundSlice';


export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const orders = useAppSelector(state => state.yourOrders.orders)
  const reversedOrders = [...orders].reverse()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useAppDispatch()
  const handleScroll = () => {
    // Toggles the navbar background if page has been scrolled down from top
    window.scrollY === 0 ? dispatch(setNavBackground(false)) : dispatch(setNavBackground(true))
  }

  return (
    <div className={styles['main-content']}>
      <Navbar />
      <div className={styles['wrapper']}>
        <div className={styles['page-title-wrapper']}>
          <PointOfSaleIcon sx={{ color: yellow[200], fontSize: 50 }} />
          <h1 className={styles['page-title']}>Your Orders</h1>
        </div>
        <div className={styles['container']}>
          {reversedOrders.length > 0 ?
          <>
            {reversedOrders.map(o => {
              return <div key={o.id}><YourOrdersItem item={o} /></div>
            })}
            </>
            :
            <p>You have no previous orders</p>
          }
        </div>
      </div>
      <div className={styles['footer-wrapper']}>
        <Footer />
      </div>
    </div>
  )
}
