import { Link } from "react-router-dom";
import styles from "./LicenseSectionTwo.module.css";
import Float from "./Float";
function LicenseSectionTwo() {
  return (
    <section className={styles.section}>
      <div className={styles.float}>
        <Float>IMAGE LICENSING</Float>
      </div>
      <div className={styles.container}>
        <div className={styles.contentImage}></div>
        <div className={styles.info}>
          <p>
            <Link className={styles.link} to="https://unsplash.com/">
              Link
            </Link>
          </p>
          <p>
            <Link className={styles.link} to="https://unsplash.com/license">
              License
            </Link>
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={`${styles.contentImage} ${styles.contentImage2}`}></div>
        <div className={styles.info}>
          <p>
            <Link className={styles.link} to="https://icons8.com/">
              Link
            </Link>
          </p>
          <p>
            <Link className={styles.link} to="https://icons8.com/license/">
              License
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LicenseSectionTwo;
