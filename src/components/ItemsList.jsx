/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Items from "./Items";
import styles from "./ItemsList.module.css";

const intialItems = [
  {
    name: "Decor Plate",
    price: 65.0,
    image: "decor.png",
    category: "Plate",
    id: 234567,
  },
  {
    name: "Mint Pottery",
    price: 75.0,
    image: "mint.png",
    category: "Vase",
    id: 234568,
  },
  {
    name: "Set Of Potterys",
    price: 125.0,
    image: "set.png",
    category: "Vases",
    id: 234589,
  },
  {
    name: "Orange Ceramic",
    price: 55.0,
    image: "orange.png",
    category: "Vases",
    id: 234456,
  },
  {
    name: "Dark Bowl",
    price: 115.0,
    image: "dark.png",
    category: "Vases",
    id: 232436,
  },
  {
    name: "Square Pottery",
    price: 75.0,
    image: "square.png",
    category: "Vases",
    id: 231236,
  },
];

function ItemsList() {
  return (
    <motion.ul
      className={styles.itemsList}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {intialItems.map((item) => (
        <motion.li
          key={item.id}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.42, 0, 1, 1], // ease-in
              },
            },
          }}
        >
          <Items item={item} />
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default ItemsList;
