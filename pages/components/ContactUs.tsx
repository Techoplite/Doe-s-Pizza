import React, { useEffect } from 'react'
import styles from "../../styles/ContactUs.module.scss";
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link';

export default function ContactUs() {
  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])
  return (
    <section
      className={styles['section-contact-us']}
      id='contact' data-test='contact-us'
    >
      <div className={styles['main-content']}>
        <h1>Contact Us</h1>
        <div className={styles['text']}>
          <p>Phone: 07123 456789</p>
          <p>Email: doespizza@gmail.com</p>
        </div>
        <div className={styles['social-icons']}>
          <Link href="https://en-gb.facebook.com/" passHref >
            <a data-test='facebook-icon'>
              <Image
                data-aos="zoom-in"
                src="/social-icons/facebook.png"
                alt="Facebook Icon"
                width={70}
                height={70}
                layout="fixed"
              />
            </a>
          </Link>
          <Link href="https://www.instagram.com/" passHref >
            <a data-test='instagram-icon'>
              <Image
                data-aos="zoom-in"
                src="/social-icons/instagram.png"
                alt="Instagram Icon"
                width={70}
                height={70}
                layout="fixed"
              />
            </a>
          </Link>
          <Link href="https://twitter.com/?lang=en-gb" passHref >
            <a data-test='twitter-icon'>
              <Image
                data-aos="zoom-in"
                src="/social-icons/twitter.png"
                alt="Twitter Icon"
                width={70}
                height={70}
                layout="fixed"
              />
            </a>
          </Link>
        </div>
        <div className={`${styles['address']} + ${styles['text']}`}>
          <div className={styles['address_wrapper']}>
            <p>12 Jane Smith street</p>
            <p>Huntington</p>
            <p>HT12NG</p>
          </div>
        </div>
        <div
          className={styles['chevs-wrap']}
          onClick={handleClick}
          data-test='up-chevs'
        >
          <Image
            src="/up-chevrons.png"
            alt="Facebook Icon"
            width={30}
            height={30}
            layout="fixed"
          />
        </div>
      </div>
    </section >
  )
}
