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
    image: "set.png ",
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
    image: "dark.png ",
    category: "Vases",
    id: 232436,
  },

  {
    name: "Square Pottery",
    price: 75.0,
    image: "square.png ",
    category: "Vases",
    id: 231236,
  },
];

function ItemsList() {
  return (
    <ul className={styles.itemsList}>
      {intialItems.map((item) => (
        <Items key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ItemsList;
