import { useContext } from "react";
import styles from "./ItemsList.module.css";
import PostContext from "./PostContext";
import Items from "./Items";

function VasesItems() {
  const { vasesItems } = useContext(PostContext);

  return (
    <ul className={styles.itemsList}>
      {vasesItems.map((item) => (
        <Items item={item} key={item.id} />
      ))}
    </ul>
  );
}

export default VasesItems;
