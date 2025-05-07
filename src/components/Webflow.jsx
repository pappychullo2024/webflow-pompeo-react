import { NavLink } from "react-router-dom";
import styles from "./Webflow.module.css";

function Webflow() {
  return (
    <NavLink to="https://webflow.com/?utm_campaign=brandjs">
      <div className={styles.webflow}>
        <img src="/webflowicon.svg" alt="Webflow Badge Icon" />
        <p>Made in Webflow</p>
      </div>
    </NavLink>
  );
}

export default Webflow;
