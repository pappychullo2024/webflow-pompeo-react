import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import { useContext } from "react";
import CartPage from "./CartPage";
import PostContext from "./PostContext";

function PageVav() {
  const { isOpen, handleIsOpen, menuOpen, onToggle, handleMenuClose } =
    useContext(PostContext);
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <h2>
          <NavLink to="/" className={styles.pompeoLogo}>
            Pompeo
          </NavLink>
        </h2>
        <ul className={`${styles.ul} ${styles.list}`}>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/shop">SHOP</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>

          <div onClick={handleIsOpen} className={styles.cartList}>
            <img
              className={styles.cartImg}
              src="/cart.svg"
              alt="gold & black vase image"
            />
            <span>Cart</span>
          </div>
          <div onClick={onToggle} className={styles.burgerIcon}>
            <img src="/burger-menu-svgrepo-com.svg" alt="" />
          </div>

          {isOpen ? <CartPage /> : ""}
        </ul>
      </nav>

      {menuOpen && (
        <nav className={styles.navTwo}>
          <ul className={`${styles.menu} ${styles.list}`}>
            <li>
              <NavLink className={styles.link} to="/" onClick={handleMenuClose}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.link}
                to="/about"
                onClick={handleMenuClose}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.link}
                to="/shop"
                onClick={handleMenuClose}
              >
                SHOP
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.link}
                to="/contact"
                onClick={handleMenuClose}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default PageVav;
