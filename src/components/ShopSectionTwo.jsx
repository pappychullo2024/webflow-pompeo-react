import ItemsListTwo from "./ItemsListTwo";
import styles from "./ShopSectionTwo.module.css";

function ShopSectionTwo() {
  return (
    <section className={styles.sectionTwo}>
      <div className={styles.about}>
        <p>OUR ONLINE STORE</p>
        <h3>Ceramic Collection</h3>
      </div>
      <ItemsListTwo />
    </section>
  );
}

export default ShopSectionTwo;
