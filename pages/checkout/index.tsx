import React from 'react'
import Navbar from '../components/Navbar'
import styles from "../../styles/Checkout.module.scss";
import Footer from '../components/Footer';
import DefaultBtn from '../components/DefaultBtn';
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import Link from 'next/link'
import OrderSummary from '../components/OrderSummary';



export default function LogIn() {
    return (
        <Provider store={store}>
            <div className={styles['container']}>
                <Navbar />
                <div className={styles['main-content']}>
                   <OrderSummary/>
                </div>
                <Link href="/checkout" passHref >
                    <div className={styles['btn']}>
                        <DefaultBtn label="Confirm" />
                    </div>
                </Link>
                <div className={styles['footer-wrapper']}>
                    <Footer />
                </div>
            </div>
        </Provider>
    )
}
