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
    <section className={styles['section-about-us']} id='about'>
      <div className={styles['top-spacer']}></div>
      <div className={styles['main-content']}>
        <h1>About Us</h1>
        <p data-aos="fade-up">At Doe’s Pizza we do things properly.</p>
        <div className={styles['flex-container']}>
          <div className={styles['img-wrapper']}>
            <Image
              data-aos="fade-up"
              src="/pizza-and-oven.jpg"
              alt="A pizza in front of a wood fired oven"
              width={255.65}
              height={141.82}
              layout="responsive"
            />
          </div>
          <p data-aos="fade-up">Our wood fired oven will give your pizza a puffy crust and make it taste the way it should.</p>
        </div>
        <div className={styles['flex-container']}>
          <div className={styles['img-wrapper']}>
            <Image
              data-aos="fade-up"
              src="/ingredients.jpg"
              alt="A pizza in front of a wood fired oven"
              width={210}
              height={141.82}
              layout="responsive"
            />
          </div>
          <p data-aos="zoom-up" data-aos-anchor-placement="top-bottom">
            We use only the best ingredients to deliver the best product.
          </p>
        </div>
      </div>
    </section>

  )
}
