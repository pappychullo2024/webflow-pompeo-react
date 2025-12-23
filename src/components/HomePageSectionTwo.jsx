/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Float from "./Float";
import HandCraftPottery from "./HandCraftPottery";
import styles from "./HomePageSectionTwo.module.css";

function HomePageSectionTwo() {
  return (
    <section className={styles.container}>
      <div className={styles.sectionTwo}>
        {/* FLOAT TEXT */}
        <motion.div
          className={styles.float}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.42, 0, 1, 1], // ease-in
          }}
        >
          <Float>
            <p>HAND CRAFT POTTERY</p>
          </Float>
        </motion.div>

        {/* SECTION HEADER */}
        <motion.div
          className={styles.sectionDescription}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.42, 0, 1, 1],
          }}
        >
          <p>PRODUCT CATEGORIES</p>
          <h2>
            Porcelain <span className={styles.different_font}>&</span> Pottery
          </h2>
        </motion.div>

        {/* PRODUCTS (leave as-is) */}

        <HandCraftPottery />

        {/* ABOUT SECTION */}
        <motion.div
          className={styles.sectionAbout}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* LEFT ABOUT */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.42, 0, 1, 1],
                },
              },
            }}
          >
            <h2>
              Hand Grafted <br />
              Pottery since 1990
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum. Duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla, ut commodo diam libero
              vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
              imperdiet. Nunc ut sem vitae risus posuere.
            </p>
          </motion.div>

          {/* RIGHT ABOUT */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.42, 0, 1, 1],
                },
              },
            }}
          >
            <h2>
              We Provide Premium <br />
              Pottery Products
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum. Duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla, ut commodo diam libero
              vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
              imperdiet. Nunc ut sem vitae risus posuere.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomePageSectionTwo;
