import React from 'react'
import styles from "../../styles/Landing.module.scss";
import LandingBtn from './LandingBtn';



export default function Landing() {
    return (
        <section className={styles.sectionLanding}>
            <h1>LIKE MAMMA USED TO MAKE...</h1>
            <LandingBtn label="Book Now" />
            <LandingBtn label="Order Online*" />
            <div className="business-info">
                <h2>Open from 11am to 11pm</h2>
                <h2>Tuesday closed</h2>
                <h3>*Account required</h3>
            </div>
        </section>


    )
}
