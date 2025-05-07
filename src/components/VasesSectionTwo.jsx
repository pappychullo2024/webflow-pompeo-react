import Button from "./Button";

import styles from "./ShopSectionTwo.module.css";
import VasesItems from "./VasesItems";

function VasesSectionTwo() {
  return (
    <section className={styles.sectionTwo}>
      <div className={styles.about}>
        <p>OUR ONLINE STORE</p>
        <h3>Ceramic Collection</h3>
      </div>
      <VasesItems />
      <Button>BACK TO SHOP</Button>
    </section>
  );
}

export default VasesSectionTwo;
