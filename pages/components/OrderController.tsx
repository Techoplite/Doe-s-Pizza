import React, { useState } from 'react'
import styles from "../../styles/OrderController.module.scss";

export default function OrderController() {
  const [quantity, setQuantity] = useState(0)
  return (
    <div className={styles['container']}>
      <p
        className={`${styles['grid-item']} ${styles['symbol']}`}
        onClick={() => setQuantity(
          (prevQuantity) => prevQuantity > 0 ? prevQuantity - 1 : 0)
        }
      >-</p>
      <p className={styles['grid-item']}>{quantity}</p>
      <p
        className={`${styles['grid-item']} ${styles['symbol']}`}
        onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
      >+</p>
    </div>
  )
}
