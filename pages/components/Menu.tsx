import React from 'react'
import styles from "../../styles/Menu.module.scss";
import Image from 'next/image'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggle } from '../../redux/menu/menuSlice'
import { setIsAuthenticated } from '../../redux/auth/authSlice';
import { resetOrder } from '../../redux/order/orderSlice';
import { resetBooking } from '../../redux/booking/bookingSlice';
import { resetYourOrders } from '../../redux/yourOrders/yourOrdersSlice';

export default function Menu() {
  const menuOpen = useAppSelector(state => state.menu.open)
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
  const username = useAppSelector(state => state.auth.credentials.username)
  const dispatch = useAppDispatch()
  const getStyleName = () => {
    if (menuOpen) {
      return `${styles['section-menu']} ${styles['slide-in']}`
    }
    return styles['section-menu']
  }
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

  return (
    <section className={getStyleName()} data-test='menu'>
      <div className={styles['menu-content']}>
        <div
          data-test='back-btn'
          className={styles.row}
          onClick={() => dispatch(toggle({ section: null, open: false }))}
        >
          <div className={styles['left-chevrons']}>
            <Image
              src="/left-chevrons.png"
              alt="Landscape picture"
              width={30}
              height={30}
            />
          </div>
          <h1 className={styles.h1}>Back</h1>
        </div>
        {isAuthenticated && <h2 className={styles['h2']}>{username}</h2>}
        <div className={styles['br']} />
        <Link href="/" passHref >
          <h1 className={styles['nav-link']} onClick={() => dispatch(toggle({ section: 'landing', open: false }))}>Home</h1>
        </Link>
        {!isAuthenticated ? (
          <div >
            <div className={styles['br']} />
            <div className={styles['links-container']}>
              <Link href="/login" passHref >
                <h1 className={styles['nav-link']} onClick={() => dispatch(toggle({ section: null, open: false }))}>Log In</h1>
              </Link>
              <Link href="/signup" passHref>
                <h1 className={styles['nav-link']} onClick={() => dispatch(toggle({ section: null, open: false }))}>Sign Up</h1>
              </Link>
            </div>
          </div>
        ) : (
            <div>
            <div className={styles['br']} />
            <div className={styles['links-container']}>
              <Link href="/" passHref >
                <h1
                  className={styles['nav-link']}
                  onClick={() => handleLogout()}>
                  Log Out
                </h1>
              </Link>
              <Link href="/your-orders" passHref >
                <h1
                  className={styles['nav-link']}
                  onClick={() =>
                    dispatch(toggle({ section: 'landing', open: false }))}>
                  Your Orders
                </h1>
              </Link>
            </div>
          </div>
        )
        }
        <div>
        <div className={styles['br']} />
          <div className={styles['links-container']}>
            <Link href="/" passHref >
              <h1 className={styles['nav-link']} onClick={() =>
                dispatch(toggle({ section: 'about', open: false }))}>About Us</h1>
            </Link>
            <Link href="/" passHref >
              <h1 className={styles['nav-link']} onClick={() =>
                dispatch(toggle({ section: 'contact', open: false }))}>Contact Us</h1>
            </Link>
          </div>
          <div className={styles['br']} />
        </div>
      </div>


    </section>
  )
}

