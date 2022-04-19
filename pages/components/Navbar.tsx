import Image from 'next/image'
import React from 'react'
import { toggle } from '../redux/menu/menuSlice'
import styles from "../../styles/Navbar.module.scss";
import { useAppDispatch } from '../redux/hooks';
import Menu from './Menu';
import NavBackground from './NavBackground';


export default function Navbar() {
    const dispatch = useAppDispatch()
    return (
            <div>
            <Menu />
            <NavBackground/>
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
                        onClick={() => dispatch(toggle())}>
                        <Image
                            src="/../public/hamburger.png"
                            alt="Landscape picture"
                            width={25}
                            height={20}
                        />
                    </div>
                </nav>
            </div>
    )
}
