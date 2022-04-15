import Image from 'next/image'
import React from 'react'
import styles from "../../styles/Navbar.module.scss";


export default function Navbar(props) {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image
                    src="/../public/logo-small.png"
                    alt="Landscape picture"
                    width={190}
                    height={30}

                />
            </div>
            <div
                className={styles.hamburger}
                onClick={() => props.setMenuOpen(!props.menuOpen)}>
                <Image
                    src="/../public/hamburger.png"
                    alt="Landscape picture"
                    width={25}
                    height={20}
                />
            </div>
        </nav>
    )
}
