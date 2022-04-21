import React from 'react'
import styles from "../../styles/OrderItem.module.scss";
import Image from 'next/image'



export default function OrderItem() {
    return (
        <div className={styles['item-container']}>
            <div className={styles['left']}>
                <Image
                    src="/../public/pizzas/margherita.png"
                    alt="Landscape picture"
                    width={116}
                    height={116}
                />
            </div>
            <div className={styles['right']}>
                <h1 className={styles['h1']}>Margherita</h1>
                <h2 className={styles['h2']}>(Translation)</h2>
                <p className={styles['p']}>Tomato Base, Mozzarella, Basil, test, test, test, test, test</p>
            </div>
        </div>
    )
}
