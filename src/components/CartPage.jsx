import { useContext } from "react";
import Button from "./Button";
import styles from "./CartPage.module.css";
import PostContext from "./PostContext";
import CartItem from "./CartItem";

function CartPage() {
  const { handleIsClose, cartItems, totalPrice } = useContext(PostContext);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>Your Cart</div>
          <div className={styles.btn} onClick={handleIsClose}>
            ❎
          </div>
        </div>

        {cartItems.length === 0 ? (
          <p className={styles.noItem}>No items found.</p>
        ) : (
          <div>
            <div className={styles.main}>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className={styles.footer}>
              <div className={styles.total}>
                <p>Subtotal</p>
                <p>${totalPrice} USD</p>
              </div>
              <Button>CONTINUE TO CHECKOUT</Button>
            </div>
          </div>
        )}
      </div>
      <div onClick={handleIsClose} className={styles.opacity}>
        Click hear
      </div>
    </section>
  );
}

export default CartPage;
