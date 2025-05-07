import Button from "./Button";
import styles from "./HomePageSectionFive.module.css";

function HomePageSectionFive() {
  return (
    <div className={styles.sectionFive}>
      <div className={styles.description}>
        <div>
          <p className={styles.pompeo}>POMPEO POTTERY</p>
          <h2>Ready to start shopping?</h2>
          <p className={styles.descriptionP}>
            Lorem ipsum dolor sit amet,<span>consectur adipiscing elit.</span>
            <br /> Suspendisse varius enim in eros elementum
          </p>
        </div>
        <Button>NEW COLLECTION</Button>
      </div>
    </div>
  );
}

export default HomePageSectionFive;
