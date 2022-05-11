import React from 'react'
import styles from "../../styles/Footer.module.scss";
import Image from 'next/image'
import Link from 'next/link';
import { toggle } from '../../redux/menu/menuSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setIsAuthenticated } from '../../redux/auth/authSlice';
import { resetBooking } from '../../redux/booking/bookingSlice';
import { resetOrder } from '../../redux/order/orderSlice';
import { resetYourOrders } from '../../redux/yourOrders/yourOrdersSlice';


export default function Footer() {
  const dispatch = useAppDispatch()
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
  const handleLogout = () => {
    // Should reset every single store
    dispatch(toggle({ section: 'landing', open: false }))
    dispatch(setIsAuthenticated({
      isAuthenticated: false, credentials: {
        username: '',
        password: ''
      }
    }))
    dispatch(resetBooking())
    dispatch(resetOrder())
    dispatch(resetYourOrders())
  }
  const homeLink =
    <Link href="/" passHref >
      <p onClick={() => dispatch(toggle({ section: 'landing', open: false }))}>Home</p>
    </Link>
  return (
    <section className={styles['section-footer']}>
      <div className={styles['logo-wrapper']}>
        <Image
          src="/logo-small.png"
          alt="Facebook Icon"
          width={182}
          height={32}
          layout="fixed"
        />
      </div>
      <div className={styles['links-container']}>
        <div className={styles['left']}>
          {homeLink}
          {!isAuthenticated ?
            (
              <>
                <Link href="/signup" passHref >
                  <p>Sign Up</p>
                </Link>
                <Link href="/login" passHref >
                  <p>Log In</p>
                </Link>
              </>
            ) : (
              <>
                <Link href="/" passHref >
                  <p onClick={() => handleLogout()}>Log Out</p>
                </Link>
              </>)
          }
        </div>
        <div className={styles['right']}>
          <Link href="/" passHref >
            <p onClick={() => dispatch(toggle({ section: 'about', open: false }))}>About Us</p>
          </Link>
          <Link href="/" passHref >
            <p onClick={() => dispatch(toggle({ section: 'contact', open: false }))}>Contact Us</p>
          </Link>
          <Link href="/online-order" passHref >
            <p onClick={() => dispatch(toggle({ section: '', open: false }))}>Order Online</p>
          </Link>
          <Link href="/book-now" passHref >
            <p onClick={() => dispatch(toggle({ section: '', open: false }))}>Book Now</p>
          </Link>
          {isAuthenticated &&
            <Link href="/your-orders" passHref >
              <p onClick={() => dispatch(toggle({ section: '', open: false }))}>Your Orders</p>
            </Link>
          }
        </div>
      </div>
      <p className={styles['license']}>© 2022 Mirko Oricci. All rights reserved.</p>
    </section>
  )
}