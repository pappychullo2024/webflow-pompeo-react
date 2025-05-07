import { NavLink } from "react-router-dom";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <h1>
      <NavLink to="/" className={styles.pompeoLogo}>
        Pompeo
      </NavLink>
    </h1>
  );
}

export default Logo;
