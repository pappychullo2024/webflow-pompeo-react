import Button from "./Button";
import MugsItems from "./MugsItems";
import styles from "./ShopSectionTwo.module.css";

function MugsSectionTwo() {
  return (
    <section className={styles.sectionTwo}>
      <div className={styles.about}>
        <p>OUR ONLINE STORE</p>
        <h3>Ceramic Collection</h3>
      </div>
      <MugsItems />
      <Button>BACK TO SHOP</Button>
    </section>
  );
}

export default MugsSectionTwo;
