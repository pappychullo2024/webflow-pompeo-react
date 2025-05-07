import Float from "./Float";
import Form from "./Form";
import styles from "./HomePageSectionSix.module.css";

function HomePageSectionSix() {
  return (
    <section className={styles.container}>
      <div className={styles.sectionSix}>
        <div className={styles.float}>
          <Float>
            <p>LET'S GET IN TOUCH</p>
          </Float>
        </div>
        <div className={styles.icon}></div>
        <p className={styles.heading}>LATEST NEWS</p>
        <h2>
          Latest news <span className={styles.differentFont}>&</span> New
          updates
        </h2>
        <Form />
      </div>
    </section>
  );
}

export default HomePageSectionSix;
