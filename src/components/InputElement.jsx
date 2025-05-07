import { useContext } from "react";
import PostContext from "./PostContext";
import styles from "./InputElement.module.css";

function InputElement({ item }) {
  const { handleQuantityChange } = useContext(PostContext);
  return (
    <input
      className={styles.input}
      value={item.quantity}
      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
      type="number"
      min={0}
      max={20}
    />
  );
}

export default InputElement;
