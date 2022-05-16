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
    <section
      className={styles['section-about-us']}
      id='about-us'
      data-test='about-us'
    >
      <div className={styles['top-spacer']}></div>
      <div className={styles['main-content']}>
        <h1>About Us</h1>
        <p data-aos="fade-up">At Doe’s Pizza we do things properly.</p>
        <div className={styles['flex-container']} data-aos="fade-up">
          <div className={styles['img-wrapper']}>
            <Image
              src="/pizza-and-oven.jpg"
              alt="A pizza in front of a wood fired oven"
              width={255.65}
              height={141.82}
              priority={true}
              layout="responsive"
            />
          </div>
          <div className={styles['shaped-container']}>
            <div className={styles['img-wrapper']}>
              <Image
                src="/background-shape.png"
                alt="A pizza in front of a wood fired oven"
                width={210}
                height={141.82}
                priority={true}
                layout="responsive"
              />
            </div>
            <p className={styles['text-on-img']}>Our wood fired oven will give your pizza a puffy crust and make it taste the way it should.</p>
          </div>
        </div>
        <div className={styles['flex-container']} data-aos="fade-up">
          <div className={`${styles['img-wrapper']} `}>
            <Image
              src="/ingredients.jpg"
              alt="A pizza in front of a wood fired oven"
              width={210}
              height={141.82}
              priority={true}
              layout="responsive"
            />
          </div>
          <div className={styles['shaped-container']}>
            <div className={styles['img-wrapper']}>
              <Image
                src="/background-shape.png"
                alt="A pizza in front of a wood fired oven"
                width={210}
                height={141.82}
                priority={true}
                layout="responsive"
              />
            </div>
            <p className={styles['text-on-img']}>
              We use only the best ingredients to deliver the best product.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}
