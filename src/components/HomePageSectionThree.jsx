/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import styles from "./HomePageSectionThree.module.css";
import Float from "./Float";
import { NavLink } from "react-router-dom";

const items = [
  {
    name: "Gold & Black Pottery",
    price: 95.0,
    image: "goldblack.png",
    category: "Vases",
    id: 4455986,
  },
  {
    name: "Orange Ceramic",
    price: 55.0,
    image: "orange.png",
    category: "Vases",
    id: 234456,
  },
];

function HomePageSectionThree() {
  const goldBlackPottery = items.filter(
    (item) => item.name === "Gold & Black Pottery"
  );
  const orangeCeramic = items.filter((item) => item.name === "Orange Ceramic");

  const formattedPottery = goldBlackPottery.map((item) =>
    item.name.split(" ").join("-")
  );

  const formattedCeramic = orangeCeramic.map((item) =>
    item.name.split(" ").join("-")
  );

  return (
    <section className={styles.container}>
      <div className={styles.sectionThree}>
        {/* FLOAT */}
        <motion.div
          className={styles.float}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 1, 1] }}
        >
          <Float>
            <p>FEATURED PRODUCTS</p>
          </Float>
        </motion.div>

        {/* FIRST PRODUCT */}
        {goldBlackPottery.map((item) => (
          <div className={styles.content} key={item.id}>
            {/* IMAGE — LEFT → CENTER */}
            <motion.div
              className={styles.contentImg}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.42, 0, 1, 1] }}
            >
              <img src="/bigvase.png" alt="Gold and Black Pottery" />
            </motion.div>

            {/* TEXT — RIGHT → CENTER */}
            <motion.div
              className={styles.description}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                ease: [0.42, 0, 1, 1],
                delay: 0.1,
              }}
            >
              <h3>{item.name}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim
                veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex
                ea commodo consequatuisaute.
              </p>

              <NavLink
                className={styles.link}
                to={`/product/${item.id}?${formattedPottery}`}
              >
                <p>View Details</p>
              </NavLink>
            </motion.div>
          </div>
        ))}

        {/* SECOND PRODUCT (REVERSED) */}
        {orangeCeramic.map((item) => (
          <div
            className={`${styles.content} ${styles.orangeCeramic}`}
            key={item.id}
          >
            {/* TEXT — LEFT → CENTER */}
            <motion.div
              className={styles.description}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.42, 0, 1, 1] }}
            >
              <h3>{item.name}</h3>
              <p>
                Pri cu dico labores officiis, odio principes complectitur ad
                sea. Sea id doctus forensibus, nec lorem vocent aliquam eu.
                Aliquid definitiones id cum, ad meliore perpetua referrentur
                sed. Quas suscipit ad mea verear vivendo tincidunt.
              </p>

              <NavLink
                className={styles.link}
                to={`/product/${item.id}?${formattedCeramic}`}
              >
                <p>View Details</p>
              </NavLink>
            </motion.div>

            {/* IMAGE — RIGHT → CENTER */}
            <motion.div
              className={`${styles.contentImg} ${styles.imgTwo}`}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.8,
                ease: [0.42, 0, 1, 1],
                delay: 0.1,
              }}
            >
              <img src="/orangeceramic.png" alt="Orange Ceramic" />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomePageSectionThree;
