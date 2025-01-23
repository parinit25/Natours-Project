import React from "react";
import styles from "./Tours.module.scss";

const TourCard = ({ pictureClass, spanClass, title, details, price }) => {
  return (
    <div className={styles.col_1_of_3}>
      <div className={styles.card}>
        <div className={`${styles.card__side} ${styles.card__side__front}`}>
          <div className={`${styles.card__picture} ${pictureClass}`}>
            &nbsp;
          </div>
          <h4 className={styles.card__heading}>
            <span className={`${styles.card__heading__span} ${spanClass}`}>
              {title}
            </span>
          </h4>
          <div className={styles.card__details}>
            <ul>
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`${styles.card__side} ${styles.card__side__back} ${spanClass}`}
        >
          <div className={styles.card__cta}>
            <div className={styles.card__price__box}>
              <p className={styles.card__price__only}>Only</p>
              <p className={styles.card__price__value}>${price}</p>
            </div>
            <a href="/" className={`${styles.btn} ${styles.btnWhite}`}>
              Book now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
