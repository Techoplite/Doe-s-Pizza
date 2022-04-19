import React from 'react'
import styles from "../../styles/Menu.module.scss";
import Image from 'next/image'
import Link from 'next/link'


export default function Menu(props) {
  const getStyleName = () => {
    if (props.menuOpen) {
      return `${styles['section-menu']} ${styles['slide-in']}`
    }
    return styles['section-menu']
  }
  return (
    <section className={getStyleName()}>
      <div className={styles['menu-content']}>
        <div className={styles.row} onClick={() => props.setMenuOpen(!props.menuOpen)}>
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
        <div>
          <div className={styles['br']} />
          <Link href="/login" passHref>
            <h1 className={styles['nav-link']}>Log In</h1>
          </Link>
          <h1 className={styles['nav-link']}>Sign Up</h1>
        </div>
        <div>
          <div className={styles['br']} />
          <h1 className={styles['nav-link']}>About Us</h1>
          <h1 className={styles['nav-link']}>Contact Us</h1>
          <div className={styles['br']} />
        </div>
      </div>
    </section>
  )
}
