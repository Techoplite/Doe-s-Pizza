import React from 'react'
import styles from "../../styles/MenuItem.module.scss";
import Image from 'next/image'
import OrderController from './OrderController';



export default function MenuItem(props: {
  imageSrc: string,
  title: string
  ingredients: string
  price: string
}) {
  return (
    <div className={styles['item-container']}>
      <div className={styles['top']}>
        <div>
          <Image
            src={props.imageSrc}
            alt="Landscape picture"
            width={150}
            height={150}
          />
        <OrderController price={props.price} title={props.title}/>
        </div>
        <div className={styles['details']}>
          <h1 className={styles['h1']}>{props.title}</h1>
          <h2 className={styles['h2']}>Price: £{parseFloat(props.price).toFixed(2)}</h2>
          <p className={styles['p']}>{props.ingredients}</p>
        </div>
      </div>
    </div>
  )
}
