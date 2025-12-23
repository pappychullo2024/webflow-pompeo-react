/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styles from "./HandCraftPottery.module.css";

function HandCraftPottery() {
  return (
    <motion.div
      className={styles.handCraft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {/* VASES */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              ease: [0.42, 0, 1, 1], // ease-in
            },
          },
        }}
      >
        <NavLink to="/vases" className={styles.link}>
          <div className={styles.vase}>
            <img src="/vase.png" alt="vase" />
            <p>VASES</p>
          </div>
        </NavLink>
      </motion.div>

      {/* MUGS */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              ease: [0.42, 0, 1, 1],
            },
          },
        }}
      >
        <NavLink to="/mugs" className={styles.link}>
          <div className={styles.mug}>
            <img src="/mug.png" alt="mug" />
            <p>MUGS</p>
          </div>
        </NavLink>
      </motion.div>

      {/* PLATES */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              ease: [0.42, 0, 1, 1],
            },
          },
        }}
      >
        <NavLink to="/plates" className={styles.link}>
          <div className={styles.plate}>
            <img src="/plate.png" alt="plate" />
            <p>PLATES</p>
          </div>
        </NavLink>
      </motion.div>
    </motion.div>
  );
}

export default HandCraftPottery;
