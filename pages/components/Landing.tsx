import React from 'react'
import styles from "../../styles/Landing.module.scss";
import LandingBtn from './LandingBtn';



export default function Landing() {
    return (
        <section className={styles.sectionLanding}>
            <h1>LIKE MAMMA USED TO MAKE...</h1>
                <LandingBtn label="Book Now" />
                <LandingBtn label="Order Online*" />
        </section>


    )
}
