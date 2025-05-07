import { NavLink } from "react-router-dom";
import Button from "./Button";
import styles from "./HomePageSectionOne.module.css";

function HomePageSectionOne() {
  return (
    <section className={styles.section}>
      <div className={styles.section0ne}>
        <div className={styles.description}>
          <p className={styles.name}>POMPEO POTTERY</p>
          <h2>
            Unique Porcelain <span className={styles.differentFont}>&</span>{" "}
            Stone Collection
          </h2>
          <p className={styles.descriptionP}>
            Unique & modern pottery made by our master in porcelain & stones.
          </p>
          <NavLink to="/shop">
            <Button>SHOP COLLECTION</Button>
          </NavLink>
        </div>
        <div className={styles.imgDiv}>
          <img src="/gbv.png" alt="gold & black vase image" />
        </div>
      </div>
    </section>
  );
}

export default HomePageSectionOne;
