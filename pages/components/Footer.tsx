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
import { useRouter } from 'next/router';


export default function Footer() {
  const dispatch = useAppDispatch()
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
  const router = useRouter();
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
      <p
        onClick={() => dispatch(toggle({ section: 'landing', open: false }))}
        data-test='footer_home_link'
      >Home</p>
    </Link>
  return (
    <section className={styles['section-footer']} data-test='footer'>
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
          <Link href="/" passHref >
            <p
              data-test='footer_popular-pizzas_link'
              onClick={() => dispatch(toggle({ section: 'popular-pizzas', open: false }))}
            >Popular Pizzas</p>
          </Link>
          {!isAuthenticated ?
            (
              <>
                {router.pathname !== '/signup' &&
                  <Link href="/signup" passHref >
                    <p data-test='footer_sign-up_link'>Sign Up</p>
                  </Link>
                }
                {router.pathname !== '/login' &&
                  <Link href="/login" passHref >
                    <p data-test='footer_log-in_link'>Log In</p>
                  </Link>
                }
              </>
            ) : (
              <>
                <Link href="/" passHref >
                  <p
                    onClick={() => handleLogout()} data-test='footer_log-out_link'
                  >
                    Log Out
                  </p>
                </Link>
              </>)
          }
        </div>
        <div className={styles['right']}>
          <Link href="/" passHref >
            <p
              onClick={() => dispatch(toggle({ section: 'about-us', open: false }))
              }
              data-test='footer_about-us_link'
            >About Us</p>
          </Link>
          <Link href="/" passHref >
            <p
              data-test='footer_contact-us_link'
              onClick={() => dispatch(toggle({ section: 'contact-us', open: false }))}
            >Contact Us</p>
          </Link>
          {isAuthenticated &&
            <Link href="/online-order" passHref >
              <p onClick={() => dispatch(toggle({ section: '', open: false }))}>Order Online</p>
            </Link>
          }
          {router.pathname !== '/book-now' &&
            <Link href="/book-now" passHref >
              <p onClick={() => dispatch(toggle({ section: '', open: false }))}>Book Now</p>
            </Link>
          }
          {isAuthenticated && router.pathname !== '/your-orders' &&
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