import styles from "./HandCraftPottery.module.css";

import { NavLink } from "react-router-dom";

function HandCraftPottery() {
  return (
    <div className={styles.handCraft}>
      <NavLink to="/vases" className={styles.link}>
        <div className={styles.vase}>
          <img src="/vase.png" alt="vase" />

          <p>VASES</p>
        </div>
      </NavLink>
      <NavLink to="/mugs" className={styles.link}>
        <div className={styles.mug}>
          <img src="/mug.png" alt="mug" />

          <p>MUGS</p>
        </div>{" "}
      </NavLink>{" "}
      <NavLink to="/plates" className={styles.link}>
        <div className={styles.plate}>
          <img src="/plate.png" alt="plate" />

          <p>PLATES</p>
        </div>
      </NavLink>
    </div>
  );
}

export default HandCraftPottery;
