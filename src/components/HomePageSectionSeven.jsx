import { NavLink } from "react-router-dom";
import styles from "./HomePageSectionSeven.module.css";

function HomePageSectionSeven() {
  return (
    <section className={styles.sectionSeven}>
      <div className={styles.info}>
        <h2>
          <NavLink to="/" className={styles.pompeoLogo}>
            Pompeo
          </NavLink>
        </h2>
        <p>
          I have always striven to fix beauty in wood, stone, <br /> glass or
          pottery, that has been my creed.
        </p>
      </div>
      <div className={styles.contacts}>
        <div>
          <figure>
            <img src="emailicon.png" alt="Email" />
            <figcaption>EMAIL</figcaption>
          </figure>
          <p>pompeopotery@gmail.com</p>
        </div>
        <div>
          <figure>
            <img src="location.png" alt="Location" />
            <figcaption>FIND</figcaption>
          </figure>
          <p>
            Central Park, Manhattan <br />
            New York, 1101
          </p>
        </div>
        <div>
          <figure>
            <img src="call.png" alt="Call" />
            <figcaption>CALL</figcaption>
          </figure>
          <p>+1 292 345 678</p>
        </div>
      </div>
    </section>
  );
}

export default HomePageSectionSeven;
