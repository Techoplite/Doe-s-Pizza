import React, { useEffect, useState } from 'react'
import styles from "../../styles/Menu.module.scss";


export default function Menu(
  props: {
    menuOpen: boolean
  }
) {
  const getStyleName = () => {
    if (props.menuOpen) {
      return `${styles['section-menu']} ${styles['slide-in']}`
    }
    return styles['section-menu'] 
  }
  return (
    <section className={getStyleName()}></section>
  )
}
