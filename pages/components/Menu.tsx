import React, { useEffect, useState } from 'react'
import styles from "../../styles/Menu.module.scss";
import Image from 'next/image'


export default function Menu(props) {
  const getStyleName = () => {
    if (props.menuOpen) {
      return `${styles['section-menu']} ${styles['slide-in']}`
    }
    return styles['section-menu']
  }
  return (
    <section className={getStyleName()}>
      <div
        className={styles.hamburger}
        onClick={() => props.setMenuOpen(!props.menuOpen)}>
        <div className={styles.row}>
          <div className={styles['left-chevrons']}>
            <Image
              src="/../public/left-chevrons.png"
              alt="Landscape picture"
              width={30}
              height={30}
            />
          </div>
          <h1 className={styles.h1}>Home</h1>
        </div>
      </div>
    </section>
  )
}
