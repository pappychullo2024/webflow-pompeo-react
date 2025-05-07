import { NavLink } from "react-router-dom";
import styles from "./AboutPageSectionFour.module.css";
import Float from "./Float";

function AboutPageSectionFour() {
  return (
    <section className={styles.sectionFour}>
      <div className={styles.float}>
        <Float>THIS IS OUR MISSION</Float>
      </div>
      <div className={styles.product}>
        <div className={styles.contentImg}>
          <div className={styles.ceramic}>
            <img src="/orangeceramic.png" alt=" Orange Ceramic" />
          </div>
          <div className={styles.goldVase}>
            <img src="/bigvase.png" alt="Gold and Black Pottery" />
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <h4>
          Created With Love <span className={styles.differentFont}>&</span>
          Passion
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum. Duis cursus, mi quis viverra ornare,
          eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <span>
          <NavLink className={styles.link} to="/shop">
            View More Pieces
          </NavLink>
        </span>
      </div>
    </section>
  );
}

export default AboutPageSectionFour;
