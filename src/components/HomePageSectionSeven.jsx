/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styles from "./HomePageSectionSeven.module.css";

function HomePageSectionSeven() {
  return (
    <section className={styles.sectionSeven}>
      {/* INFO BLOCK */}
      <motion.div
        className={styles.info}
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.42, 0, 1, 1],
        }}
      >
        <h2>
          <NavLink to="/" className={styles.pompeoLogo}>
            Pompeo
          </NavLink>
        </h2>

        <p>
          I have always striven to fix beauty in wood, stone, <br /> glass or
          pottery, that has been my creed.
        </p>
      </motion.div>

      {/* CONTACTS */}
      <motion.div
        className={styles.contacts}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
      >
        {/* EMAIL */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.7,
                ease: [0.42, 0, 1, 1],
              },
            },
          }}
        >
          <figure>
            <img src="emailicon.png" alt="Email" />
            <figcaption>EMAIL</figcaption>
          </figure>
          <p>pompeopotery@gmail.com</p>
        </motion.div>

        {/* LOCATION */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.7,
                ease: [0.42, 0, 1, 1],
              },
            },
          }}
        >
          <figure>
            <img src="location.png" alt="Location" />
            <figcaption>FIND</figcaption>
          </figure>
          <p>
            Central Park, Manhattan <br />
            New York, 1101
          </p>
        </motion.div>

        {/* CALL */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.7,
                ease: [0.42, 0, 1, 1],
              },
            },
          }}
        >
          <figure>
            <img src="call.png" alt="Call" />
            <figcaption>CALL</figcaption>
          </figure>
          <p>+1 292 345 678</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HomePageSectionSeven;
