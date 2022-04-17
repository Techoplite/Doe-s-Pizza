import React, { useEffect } from 'react'
import styles from "../../styles/AboutUs.module.scss";
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AboutUs() {
    useEffect(() => {
        AOS.init({ duration: 1500 })
    }, [])
    return (
        <section className={styles['section-about-us']}>
            <div className={styles['top-spacer']}></div>
            <div className={styles['main-content']}>
                <h1>About Us</h1>
                <p data-aos="fade-up">At Doe’s Pizza we do things properly.</p>
                <Image
                    data-aos="flip-up"
                    src="/../public/small/about-us-pic1.png"
                    alt="A pizza in front of a wood fired oven"
                    width={255.65}
                    height={141.82}
                    layout="responsive"
                />
                <p data-aos="fade-up">Our wood fired oven will give your pizza a puffy crust and make it taste the way it should.</p>
                <Image
                    data-aos="flip-up"
                    src="/../public/small/about-us-pic2.png"
                    alt="A pizza in front of a wood fired oven"
                    width={257}
                    height={195.76}
                    layout="responsive"
                />
                <p data-aos="zoom-up" data-aos-anchor-placement="top-bottom">
                    We use only the best ingredients to deliver the best product.
                </p>
            </div>
        </section>

    )
}
