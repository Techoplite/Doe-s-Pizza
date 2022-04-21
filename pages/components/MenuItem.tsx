import React from 'react'
import styles from "../../styles/MenuItem.module.scss";
import Image from 'next/image'
import OrderController from './OrderController';



export default function MenuItem() {
    return (
        <div className={styles['item-container']}>
            <div className={styles['top']}>
                <div className={styles['image']}>
                <Image
                    src="/../public/pizzas/margherita.png"
                    alt="Landscape picture"
                    width={150}
                    height={150}
                    />
                    </div>
                <div className={styles['details']}>
                    <h1 className={styles['h1']}>Margherita</h1>
                    <h2 className={styles['h2']}>(Translation)</h2>
                    <p className={styles['p']}>Tomato Base, Mozzarella, Basil, test, test, test, test, test</p>
                </div>
            </div>
            <div >
                <OrderController />
            </div>
        </div>
    )
}
