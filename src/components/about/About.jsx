import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.section_about}>
      <div className={styles.center_text}>
        <h2
          className={`${styles.heading_secondary} ${styles.margin_bottom_big}`}
        >
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className={styles.row}>
        <div className={styles.col_1_of_2}>
          <h3
            className={`${styles.heading_tertiary} ${styles.margin_bottom_small}`}
          >
            You're going to fall in love with nature
          </h3>
          <p className={styles.paragraph}>
            Join us for unforgettable adventures, guided by experts who share
            your passion for the wild. From mountains to rivers, every journey
            with us is a celebration of nature.
          </p>
          <h3
            className={`${styles.heading_tertiary} ${styles.margin_bottom_small}`}
          >
            Live adventurous like you never have before
          </h3>
          <p className={styles.paragraph}>
            Experience the thrill of discovery, the joy of the great outdoors,
            and the peace that comes with being surrounded by nature. Adventure
            awaits!
          </p>
          <a href="/" className={styles.button_text}>
            Learn more &rarr;
          </a>
        </div>
        <div className={styles.col_1_of_2}>
          <div className={styles.composition}>
            <img
              src="assets/nat-1-large.jpg"
              alt="Nature pic 1"
              className={`${styles.composition__photo} ${styles.composition__photo__p1}`}
            />
            <img
              src="assets/nat-2-large.jpg"
              alt="Nature pic 2"
              className={`${styles.composition__photo} ${styles.composition__photo__p2}`}
            />
            <img
              src="assets/nat-3-large.jpg"
              alt="Nature pic 3"
              className={`${styles.composition__photo} ${styles.composition__photo__p3}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
