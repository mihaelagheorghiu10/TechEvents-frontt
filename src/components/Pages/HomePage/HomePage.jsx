import React from 'react'
import styles from './homePage.module.css'
//import Searchbar from '../../Searchbar/Searchbar'

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.searchContainer}>
        <input className={styles.input} type="text"></input>
        <button className={styles.button}>buscar</button>
      </div>
    </div>
    //<Searchbar>
  )
}
