import React from 'react'
import styles from "../../styles/Menu.module.scss";
import Image from 'next/image'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { toggle } from '../../redux/menu/menuSlice'
import { setIsAuthenticated } from '../../redux/auth/authSlice';

export default function Menu() {
  const menuOpen = useAppSelector(state => state.menu.open)
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)
  const credentials = useAppSelector(state => state.auth.credentials)
  const dispatch = useAppDispatch()
  const getStyleName = () => {
    if (menuOpen) {
      return `${styles['section-menu']} ${styles['slide-in']}`
    }
    return styles['section-menu']
  }
  return (
    <section className={getStyleName()}>
      <div className={styles['menu-content']}>
        <Link href="/" passHref >
          <div className={styles.row} onClick={() => dispatch(toggle())}>
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
        </Link>
        {!isAuthenticated ? (
          <div>
            <div>
              <div className={styles['br']} />
              <Link href="/login" passHref >
                <h1 className={styles['nav-link']} onClick={() => dispatch(toggle())}>Log In</h1>
              </Link>
              <Link href="/signup" passHref>
                <h1 className={styles['nav-link']} onClick={() => dispatch(toggle())}>Sign Up</h1>
              </Link>
            </div>
            <div>
              <div className={styles['br']} />
              <h1 className={styles['nav-link']}>About Us</h1>
              <h1 className={styles['nav-link']}>Contact Us</h1>
              <div className={styles['br']} />
            </div>
          </div>
        ) : (
          <div>
            <div>
              <div className={styles['br']} />
              <Link href="/" passHref >
                <h1
                  className={styles['nav-link']}
                  onClick={() =>
                    dispatch(toggle()) && dispatch(setIsAuthenticated({
                      isAuthenticated: false,
                      credentials
                    }))}>
                  Log Out
                </h1>
              </Link>

            </div>
            <div>
              <div className={styles['br']} />
              <h1 className={styles['nav-link']}>About Us</h1>
              <h1 className={styles['nav-link']}>Contact Us</h1>
              <div className={styles['br']} />
            </div>
          </div>
        )
        }
      </div>


    </section>
  )
}
