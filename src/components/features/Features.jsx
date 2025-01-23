import React from "react";
import styles from "./Features.module.scss";
import FeatureBox from "./FeatureBox";

const Features = () => {
  const featureBox = [
    {
      id: 1,
      icon: "arcticons:worldbox",
      feautureBoxIconClass: styles.feature_box__icon__ic1,
      heading: "Explore the world",
      paragraph:
        "Discover breathtaking destinations and hidden gems across the globe.",
    },
    {
      id: 2,
      icon: "arcticons:compass",
      feautureBoxIconClass: styles.feature_box__icon__ic2,
      heading: "Meet nature",
      paragraph:
        "Connect with the beauty of the natural world and witness its wonders.",
    },
    {
      id: 3,
      icon: "iwwa:map",
      feautureBoxIconClass: styles.feature_box__icon__ic3,
      heading: "Find your way",
      paragraph:
        "Navigate the wilderness with confidence and uncover paths less traveled.",
    },
    {
      id: 3,
      icon: "ph:heart-thin",
      feautureBoxIconClass: styles.feature_box__icon__ic3,
      heading: "Live healthier life",
      paragraph:
        "Embrace the outdoors for a rejuvenated mind, body, and spirit.",
    },
  ];
  return (
    <section className={styles.section_features}>
      <div className={styles.row}>
        {featureBox.map((item) => (
          <FeatureBox
            key={item.id}
            id={item.id}
            icon={item.icon}
            feautureBoxIconClass={item.feautureBoxIconClass}
            heading={item.heading}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
