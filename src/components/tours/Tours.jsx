import React from "react";
import styles from "./Tours.module.scss";
import TourCard from "./TourCard";

const Tours = () => {
  const tourData = [
    {
      pictureClass: styles.card__picture__1,
      spanClass: styles.card__heading__span__1,
      title: "The Sea Explorer",
      details: [
        "3 day tour",
        "Up to 30 people",
        "2 tour guides",
        "Sleep in cozy hotels",
        "Difficulty: easy",
      ],
      price: 297,
    },
    {
      pictureClass: styles.card__picture__2,
      spanClass: styles.card__heading__span__2,
      title: "The Forest Explorer",
      details: [
        "5 day tour",
        "Up to 20 people",
        "3 tour guides",
        "Sleep in cozy tents",
        "Difficulty: medium",
      ],
      price: 497,
    },
    {
      pictureClass: styles.card__picture__3,
      spanClass: styles.card__heading__span__3,
      title: "The Snow Explorer",
      details: [
        "7 day tour",
        "Up to 15 people",
        "4 tour guides",
        "Stay in mountain cabins",
        "Difficulty: hard",
      ],
      price: 797,
    },
  ];

  return (
    <section className={styles.section_tours}>
      <div className={`${styles.center_text} ${styles.margin_bottom_big}`}>
        <h2 className={`${styles.heading_secondary}`}>Most popular tours</h2>
      </div>
      <div className={styles.row}>
        {tourData.map((tour, index) => (
          <TourCard key={index} {...tour} />
        ))}
      </div>
      <div className={`${styles.center_text}`}>
        <a href="/" className={`${styles.btn} ${styles.btnGreen}`}>
          Discover all tours
        </a>
      </div>
    </section>
  );
};

export default Tours;
