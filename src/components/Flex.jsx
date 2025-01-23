import React from "react";
import styles from "../styles/Flex.module.css";

const Flex = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.el} ${styles["el--1"]}`}>HTML</div>
      <div className={`${styles.el} ${styles["el--2"]}`}>and</div>
      <div className={`${styles.el} ${styles["el--3"]}`}>CSS</div>
      <div className={`${styles.el} ${styles["el--4"]}`}>are</div>
      <div className={`${styles.el} ${styles["el--5"]}`}>amazing</div>
      <div className={`${styles.el} ${styles["el--6"]}`}>languages</div>
      <div className={`${styles.el} ${styles["el--7"]}`}>to</div>
      <div className={`${styles.el} ${styles["el--8"]}`}>learn</div>
    </div>
  );
};

export default Flex;
