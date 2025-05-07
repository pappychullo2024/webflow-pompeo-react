import Button from "./Button";
import PlatesItems from "./PlatesItems";
import styles from "./ShopSectionTwo.module.css";

function PlatesSectionTwo() {
  return (
    <section className={styles.sectionTwo}>
      <div className={styles.about}>
        <p>OUR ONLINE STORE</p>
        <h3>Ceramic Collection</h3>
      </div>
      <PlatesItems />
      <Button>BACK TO SHOP</Button>
    </section>
  );
}

export default PlatesSectionTwo;
