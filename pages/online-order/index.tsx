import React from 'react'
import Navbar from '../components/Navbar'
import styles from "../../styles/OnlineOrder.module.scss";
import Footer from '../components/Footer';
import DefaultBtn from '../components/DefaultBtn';
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import OrderItem from '../components/MenuItem';
import Link from 'next/link'



export default function LogIn() {
    return (
        <Provider store={store}>
            <div className={styles['container']}>
                <Navbar />
                <div className={styles['main-content']}>
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                </div>
                <Link href="/checkout" passHref >
                    <div className={styles['btn']}>
                        <DefaultBtn label="Checkout" />
                    </div>
                </Link>
                <div className={styles['footer-wrapper']}>
                    <Footer />
                </div>
            </div>
        </Provider>
    )
}