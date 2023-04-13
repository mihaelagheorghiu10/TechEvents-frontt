import React from 'react'
import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.divContenedor}>
      <div className={styles.divTitle}>
        <h1 className={styles.h1Title}>Events</h1>
      </div>
    </div>
  )
}
