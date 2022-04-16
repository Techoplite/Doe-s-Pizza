import React from 'react'
import Image from 'next/image'
import styles from "../../styles/PopPizzaItem.module.scss";



export default function PopPizzaItem(props: {
    imageUrl: string,
    name: string,
    price: string
}) {
    return (
            <div>
                <div id={props.name}>
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
