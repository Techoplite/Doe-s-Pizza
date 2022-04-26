import React from 'react'
import styles from "../../styles/DefaultBtn.module.scss";


export default function DefaultBtn(props) {
  return (
    <button className={styles['btn']} onClick={props.handler}>{props.label}</button>
  )
}
