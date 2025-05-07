import { NavLink } from "react-router-dom";
import styles from "./HomePageFooter.module.css";

function HomePageFooter() {
  return (
    <footer className={styles.footer}>
      <p>Template design by</p>
      <span>
        <NavLink className={styles.links} to="https://www.dorianhoxha.com/">
          {" "}
          Dorian Hoxha
        </NavLink>
      </span>
      <br />
      <p>-</p>
      <span>
        <NavLink className={styles.links} to="/image-license-info">
          Image License Info
        </NavLink>
      </span>
      <p>Powered by</p>
      <span>
        <NavLink className={styles.links} to="https://webflow.com/">
          Webflow
        </NavLink>
      </span>
    </footer>
  );
}

export default HomePageFooter;
