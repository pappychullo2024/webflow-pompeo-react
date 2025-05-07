import styles from "./AboutPageSectionThree.module.css";
import Float from "./Float";
import SocialMedia from "./SocialMedia";

function AboutPageSectionThree() {
  return (
    <section className={styles.sectionThree}>
      <div>
        <div className={styles.heading}>
          <p>OUR CREW</p>
          <h3>Talented Artist</h3>
        </div>
        <div className={styles.crew}>
          <div className={styles.description}>
            <div className={`${styles.image} ${styles.yakub} `}></div>
            <h3>Yakub Ojoawo</h3>
            <h4>SENIOR DESIGNER</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. enim in
              eros elementum
            </p>
            <SocialMedia />
          </div>
          <div className={styles.description}>
            <div className={`${styles.image} ${styles.maria} `}></div>
            <h3>Maria Monroy</h3>
            <h4>SENIOR DESIGNER</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. enim in
              eros elementum
            </p>
            <SocialMedia />
          </div>
          <div className={styles.description}>
            <div className={`${styles.image} ${styles.basket} `}></div>
            <h3>Dominic Basket</h3>
            <h4>SENIOR DESIGNER</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. enim in
              eros elementum
            </p>
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className={styles.float}>
        <Float>OUR TALENTED CREW</Float>
      </div>
    </section>
  );
}

export default AboutPageSectionThree;
