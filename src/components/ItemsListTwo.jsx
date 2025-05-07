import { useContext } from "react";
import styles from "./ItemsList.module.css";
import PostContext from "./PostContext";
import Items from "./Items";

function ItemsListTwo() {
  const { items } = useContext(PostContext);

  return (
    <ul className={styles.itemsList}>
      {items.map((item) => (
        <Items item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default ItemsListTwo;
