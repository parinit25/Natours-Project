import React from "react";
import styles from "./SvgAnimations.module.scss";

const SvgAnimations = () => {
  return (
    <div className={styles.section_svg}>
      <div className={styles.row}>
        <div className={styles.col_1_of_2}>Col 1 of 2</div>
        <div className={styles.col_1_of_2}>
          <div className={styles.svg_composition}>
            <div className={styles.background_character_container}>
              <img
                className={`${styles.svg_composition_common} ${styles.background_svg}`}
                src="svg/Background.svg"
              />
              <img
                className={`${styles.svg_composition_common} ${styles.character_svg}`}
                src="svg/Character.svg"
              />
            </div>

            <img
              className={`${styles.svg_composition_common} ${styles.textMarketing_svg}`}
              src="svg/TextMarketing.svg"
            />
            <img
              className={`${styles.svg_composition_common} ${styles.authentication_svg}`}
              src="svg/2FA.svg"
            />
            <img
              className={`${styles.svg_composition_common} ${styles.notifications_svg}`}
              src="svg/Notifications.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SvgAnimations;
