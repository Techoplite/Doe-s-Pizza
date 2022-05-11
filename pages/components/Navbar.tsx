import Image from 'next/image'
import React from 'react'
import { toggle } from '../../redux/menu/menuSlice'
import styles from "../../styles/Navbar.module.scss";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Menu from './Menu';
import NavBackground from './NavBackground';
import Link from 'next/link';
import { setIsAuthenticated } from '../../redux/auth/authSlice';
import { resetBooking } from '../../redux/booking/bookingSlice';
import { resetOrder } from '../../redux/order/orderSlice';
import { resetYourOrders } from '../../redux/yourOrders/yourOrdersSlice';


export default function Navbar() {
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

  return (
    <div>
      <Menu />
      <NavBackground />
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="/logo-small.png"
            alt="Landscape picture"
            width={190}
            height={34}
            layout="fixed"
          />
        </div>
        <div className={styles['menu-links']}>
          <Link href="/" passHref >
            <li onClick={() => dispatch(toggle({ section: 'popular-pizzas', open: false }))}>Popular Pizzas</li>
          </Link>
          <Link href="/" passHref >
            <li onClick={() => dispatch(toggle({ section: 'about', open: false }))}>About Us</li>
          </Link>
          <Link href="/" passHref >
            <li onClick={() => dispatch(toggle({ section: 'contact', open: false }))}>Contact Us</li>
          </Link>
        </div>
        <div className={`${styles['menu-links']} ${styles['auth-links']}`}>
          {!isAuthenticated ?
            <>
              <Link href="/login" passHref >
                <li>Log In</li>
              </Link>
              <Link href="/signup" passHref >
                <li className={styles['sign-up']}>Sign Up</li>
              </Link>

            </>
            :
            <Link href="/" passHref >
              <li onClick={() => handleLogout()}>Log Out</li>
            </Link>
          }
        </div>
        <div
          className={styles.hamburger}
          onClick={() => dispatch(toggle({ open: true, section: null }))}>
          <Image
            src="/hamburger.png"
            alt="Landscape picture"
            width={25}
            height={20}
          />
        </div>
      </nav>
    </div>
  )
}
