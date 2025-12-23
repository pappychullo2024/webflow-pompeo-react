/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import Button from "./Button";
import styles from "./HomePageSectionFive.module.css";

function HomePageSectionFive() {
  return (
    <section className={styles.sectionFive}>
      <motion.div
        className={styles.description}
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.42, 0, 1, 1], // smooth ease-in
        }}
      >
        <div>
          <p className={styles.pompeo}>POMPEO POTTERY</p>

          <h2>Ready to start shopping?</h2>

          <p className={styles.descriptionP}>
            Lorem ipsum dolor sit amet,
            <span>consectur adipiscing elit.</span>
            <br /> Suspendisse varius enim in eros elementum
          </p>
        </div>

        <Button>NEW COLLECTION</Button>
      </motion.div>
    </section>
  );
}

export default HomePageSectionFive;
