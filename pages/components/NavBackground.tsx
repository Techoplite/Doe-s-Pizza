import React from 'react'
import { useAppSelector } from '../redux/hooks'
import styles from "../../styles/NavBackground.module.scss";


export default function NavBackground() {
  const navBackground = useAppSelector(state => state.navBackground.open)
  const getStyle = () => {
    return navBackground ? styles['display'] : styles['hidden']
  }
  return (
    <div className={getStyle()}></div>
  )
}
