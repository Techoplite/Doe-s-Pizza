import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from "../../styles/PopPizzaItem.module.scss";
import AOS from 'aos'
import 'aos/dist/aos.css'



export default function PopPizzaItem(props: {
    imageUrl: string,
    name: string,
    price: string,
    fadeDirection: string
}) {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
            <div data-aos={props.fadeDirection} className={styles['container']}>
                <div id={props.name} className={styles['image']}>
                    <Image
                        src={props.imageUrl}
                        alt="Landscape picture"
                        width={200}
                        height={200}

                    />
                </div>
                <h2 className={styles['h2']}>{props.name}</h2>
                <h3 className={styles['h3']}>£{props.price}</h3>
            </div>
    )
}
