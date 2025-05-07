import { useContext } from "react";
import styles from "./ItemsList.module.css";
import PostContext from "./PostContext";
import Items from "./Items";

function PlatesItems() {
  const { plateItems } = useContext(PostContext);

  return (
    <ul className={styles.itemsList}>
      {plateItems.map((item) => (
        <Items item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default PlatesItems;
