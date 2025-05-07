import { NavLink } from "react-router-dom";
import styles from "./Items.module.css";

function Items({ item }) {
  const { id, image, name, price } = item;

  const formattedName = name.split(" ").join("-");

  return (
    <li className={styles.content}>
      <NavLink className={styles.link} to={`/product/${id}?${formattedName}`}>
        <img src={`/${image}`} alt={name} />

        <p>{name}</p>
      </NavLink>
      <p className={styles.price}>
        $ <span>{price}.00 USD</span>
      </p>
    </li>
  );
}

export default Items;
