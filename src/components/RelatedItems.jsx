import { NavLink } from "react-router-dom";
import Button from "./Button";
import styles from "./RelatedItems.module.css";
import Items from "./Items";

const intialItems = [
  {
    name: "Red Platte",
    price: 115.0,
    image: "redplatte.png",
    category: "Plates",
    id: 23999889,
  },

  {
    name: "Mint Bowl",
    price: 115.0,
    image: "mintbowl.png ",
    category: "Vases",
    id: 48102986,
  },

  {
    name: "Black Pottery",
    price: 115.0,
    image: "blackpottery.png ",
    category: "Vases",
    id: 4012986,
  },
];

function RelatedItems() {
  return (
    <section className={styles.section}>
      <div className={styles.btn}>
        <p className={styles.title}>Related Item</p>
        <ul className={styles.itemsList}>
          {intialItems.map((item) => (
            <Items key={item.id} item={item} />
          ))}
        </ul>

        <Button>
          <NavLink className={styles.link} to="/shop">
            Back To Shop
          </NavLink>
        </Button>
      </div>
    </section>
  );
}

export default RelatedItems;
