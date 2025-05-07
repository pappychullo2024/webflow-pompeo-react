import Button from "./Button";
import ItemsList from "./ItemsList";
import styles from "./HomePageSectionFour.module.css";
import Float from "./Float";
import { NavLink } from "react-router-dom";

function HomePageSectionFour() {
  return (
    <section className={styles.container}>
      <div className={styles.sectionFour}>
        <div className={styles.float}>
          <Float>
            <p>PRODUCT COLLECTIONS</p>
          </Float>
        </div>
        <div className={styles.about}>
          <p>OUR ONLINE STORE</p>
          <h3>Pottery Collection</h3>
        </div>
        <ItemsList />
        <NavLink to="/shop">
          <Button>VIEW ALL PRODUCTS</Button>
        </NavLink>
      </div>
    </section>
  );
}

export default HomePageSectionFour;
