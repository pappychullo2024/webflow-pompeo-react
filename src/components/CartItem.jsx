import { useContext } from "react";
import styles from "./CartItem.module.css";
import PostContext from "./PostContext";
import Input from "./Input";

function CartItem({ item }) {
  const { removeFromCart, isLoading } = useContext(PostContext);

  return (
    <div className={isLoading ? `${styles.cartFade}` : `${styles.cart}`}>
      <div className={styles.imgContainer}>
        <img src={`/${item.image}`} />
        <div>
          <h3>{item.name}</h3>
          <strong>$ {item.price}.00 uSD</strong>
          <p onClick={() => removeFromCart(item.id)}>Remove</p>
        </div>
      </div>
      <Input />
    </div>
  );
}

export default CartItem;
