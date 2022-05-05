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
      <p className={styles['license']}>© 2022 Mirko Oricci. All rights reserved.</p>
    </section>
  )
}