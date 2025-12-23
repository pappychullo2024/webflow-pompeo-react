/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import Float from "./Float";
import Form from "./Form";
import styles from "./HomePageSectionSix.module.css";

function HomePageSectionSix() {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.sectionSix}
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.42, 0, 1, 1], // smooth ease-in
        }}
      >
        {/* FLOAT */}
        <div className={styles.float}>
          <Float>
            <p>LET'S GET IN TOUCH</p>
          </Float>
        </div>

        <div className={styles.icon}></div>

        <p className={styles.heading}>LATEST NEWS</p>

        <h2>
          Latest news <span className={styles.differentFont}>&</span> New
          updates
        </h2>

        <Form />
      </motion.div>
    </section>
  );
}

export default HomePageSectionSix;
