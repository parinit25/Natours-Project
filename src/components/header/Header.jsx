import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__logoBox}>
          <img
            src="assets/logo-white.png"
            alt="Natours Logo"
            className={styles.header__logo}
          />
        </div>
        <div className={styles.header__textBox}>
          <h1 className={styles.heading_primary}>
            <span className={styles.heading_primaryMain}>Outdoors</span>
            <span className={styles.heading_primarySub}>
              is where life happens
            </span>
          </h1>
          <a
            href="/"
            className={`${styles.btn} ${styles.btnWhite} ${styles.btnAnimated}`}
          >
            Discover our tours
          </a>
        </div>
      </header>
      {/* <section className={styles.grid_test}>
        <div className={styles.row}>
          <div className={styles.col_1_of_2}>Col 1 of 2</div>
          <div className={styles.col_1_of_2}>Col 1 of 2</div>
        </div>
        <div className={styles.row}>
          <div className={styles.col_1_of_3}>Col 1 of 3</div>
          <div className={styles.col_1_of_3}>Col 1 of 3</div>
          <div className={styles.col_1_of_3}>Col 1 of 3</div>
        </div>
        <div className={styles.row}>
          <div className={styles.col_1_of_3}>Col 1 of 3</div>
          <div className={styles.col_2_of_3}>Col 2 of 3</div>
        </div>
        <div className={styles.row}>
          <div className={styles.col_1_of_4}>Col 1 of 4</div>
          <div className={styles.col_1_of_4}>Col 1 of 4</div>
          <div className={styles.col_1_of_4}>Col 1 of 4</div>
          <div className={styles.col_1_of_4}>Col 1 of 4</div>
        </div>
        <div className={styles.row}>
          <div className={styles.col_1_of_4}>Col 1 of 4</div>
          <div className={styles.col_1_of_4}>Col 1 of 4</div>
          <div className={styles.col_2_of_4}>Col 2 of 4</div>
        </div>
        <div className={styles.row}>
          <div className={styles.col_1_of_4}>Col 1 of 4</div>
          <div className={styles.col_3_of_4}>Col 3 of 4</div>
        </div>
      </section> */}
    </>
  );
};

export default Header;
