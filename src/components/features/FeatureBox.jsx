import React from "react";
import { Icon } from "@iconify/react";
import styles from "./Features.module.scss";

const FeatureBox = ({ id, icon, feautureBoxIconClass, heading, paragraph }) => {
  return (
    <div className={styles.col_1_of_4}>
      <div className={styles.feature_box}>
        <Icon
          icon={icon}
          className={`${styles.feature_box__icon} ${feautureBoxIconClass}`}
        />
        <h3
          className={`${styles.heading_tertiary} ${styles.margin_bottom_small}`}
        >
          {heading}
        </h3>
        <p className={styles.feature_box__text}>{paragraph}</p>
      </div>
    </div>
  );
};

export default FeatureBox;
