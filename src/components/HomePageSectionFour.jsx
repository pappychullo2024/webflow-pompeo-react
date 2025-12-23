/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import Button from "./Button";
import ItemsList from "./ItemsList";
import styles from "./HomePageSectionFour.module.css";
import Float from "./Float";
import { NavLink } from "react-router-dom";

function HomePageSectionFour() {
  return (
    <section className={styles.container}>
      <div className={styles.sectionFour}>
        {/* FLOAT LABEL */}
        <motion.div
          className={styles.float}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 1, 1] }}
        >
          <Float>
            <p>PRODUCT COLLECTIONS</p>
          </Float>
        </motion.div>

        {/* SECTION TITLE */}
        <motion.div
          className={styles.about}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.42, 0, 1, 1],
            delay: 0.05,
          }}
        >
          <p>OUR ONLINE STORE</p>
          <h3>Pottery Collection</h3>
        </motion.div>

        {/* ITEMS LIST (already animated) */}
        <ItemsList />

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.42, 0, 1, 1],
            delay: 0.1,
          }}
        >
          <NavLink to="/shop">
            <Button>VIEW ALL PRODUCTS</Button>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}

export default HomePageSectionFour;
