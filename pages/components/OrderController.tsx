import React from 'react'
import styles from "../../styles/OrderController.module.scss";


export default function OrderController() {
  return (
      <div className={styles['container']}>
          <p className={`${styles['grid-item']} ${styles['symbol']}`}>-</p>
          <p className={styles['grid-item']}>2</p>
          <p className={`${styles['grid-item']} ${styles['symbol']}`}>+</p>
    </div>
  )
}
