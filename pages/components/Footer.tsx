import React from 'react'
import styles from "../../styles/Footer.module.scss";
import Image from 'next/image'


export default function Footer() {
  return (
    <section className={styles['section-footer']}>
      <div className={styles['logo-wrapper']}>
        <Image
          src="/logo-small.png"
          alt="Facebook Icon"
          width={182}
          height={32}
          layout="fixed"
        />
      </div>
      <div className={styles['links-container']}>
      <div className={styles['left']}>
        <p>Text 1</p>
        <p>Text 2</p>
      </div>
        <div className={styles['right']}>
          <p>Text 3</p>
          <p>Text 5</p>
          <p onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</p>
        </div>
      </div>
        <p className={styles['license']}>© 2022 Mirko Oricci. All rights reserved.</p>

    </section>
  )
}
