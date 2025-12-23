/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "./Button";
import styles from "./HomePageSectionOne.module.css";

function HomePageSectionOne() {
  return (
    <section className={styles.section}>
      <div className={styles.section0ne}>
        {/* RIGHT → CENTER (Text) */}
        <motion.div
          className={styles.description}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.42, 0, 1, 1], // smooth ease-in
          }}
        >
          <p className={styles.name}>POMPEO POTTERY</p>

          <h2>
            Unique Porcelain <span className={styles.differentFont}>&</span>{" "}
            Stone Collection
          </h2>

          <p className={styles.descriptionP}>
            Unique & modern pottery made by our master in porcelain & stones.
          </p>

          <NavLink to="/shop">
            <Button>SHOP COLLECTION</Button>
          </NavLink>
        </motion.div>

        {/* LEFT → CENTER (Image) */}
        <motion.div
          className={styles.imgDiv}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.42, 0, 1, 1],
            delay: 0.1, // slight offset feels premium
          }}
        >
          <img src="/gbv.png" alt="gold & black vase image" />
        </motion.div>
      </div>
    </section>
  );
}

export default HomePageSectionOne;
