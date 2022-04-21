import React from 'react'
import styles from "../../styles/Landing.module.scss";
import LandingBtn from './LandingBtn';
import Image from 'next/image'





export default function Landing(props) {
    return (
        <section className={styles['section-landing']}>
            <h1>LIKE MAMMA USED TO MAKE...</h1>
            <LandingBtn label="Book Now" linkRef='/book-now'/>
            <LandingBtn label="Order Online*" linkRef='/online-order'/>
            <div className={styles.businessInfo}>
                <h2>Open from 11am to 11pm</h2>
                <h2>Tuesday closed</h2>
                <h3>*Account required</h3>
            </div>
            <div
                className={styles.downChevrons}
                onClick={() => props.setScrollDown(true)}
            >
                <Image
                    src="/../public/down-chevrons.png"
                    alt="Landscape picture"
                    width={30}
                    height={30}
                />
            </div>
        </section>
    )
}
