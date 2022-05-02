import React from 'react'
import styles from "../../styles/Footer.module.scss";
import Image from 'next/image'
import Link from 'next/link';
import { toggle } from '../../redux/menu/menuSlice';
import { useAppDispatch } from '../../redux/hooks';


export default function Footer() {
  const dispatch = useAppDispatch()
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
        <Link href="/" passHref >
            <p onClick={() => dispatch(toggle({ section: 'about', open: false }))}>About Us</p>
          </Link>
          <Link href="/" passHref >
            <p onClick={() => dispatch(toggle({ section: 'contact', open: false }))}>Contact Us</p>
          </Link>
          <Link href="/" passHref >
            <p onClick={() => dispatch(toggle({ section: 'landing', open: false }))}>Home</p>
          </Link>
        </div>
      </div>
      <p className={styles['license']}>© 2022 Mirko Oricci. All rights reserved.</p>

    </section>
  )
}