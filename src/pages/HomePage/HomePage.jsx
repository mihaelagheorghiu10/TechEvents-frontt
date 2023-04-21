import React from "react";
import styles from "./homePage.module.css";
import Searchbar from "../../components/Searchbar/Searchbar";

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <Searchbar></Searchbar>
    </div>
  );
}
