import Float from "./Float";
import HandCraftPottery from "./HandCraftPottery";
import styles from "./HomePageSectionTwo.module.css";

function HomePageSectionTwo() {
  return (
    <section className={styles.container}>
      <div className={styles.sectionTwo}>
        <div className={styles.float}>
          <Float>
            <p>HAND CRAFT POTTERY</p>
          </Float>
        </div>
        <div className={styles.sectionDescription}>
          <p>PRODUCT CATEGORIES</p>
          <h2>
            Porcelain <span className={styles.different_font}>&</span> Pottery
          </h2>
        </div>
        <HandCraftPottery />
        <div className={styles.sectionAbout}>
          <div>
            <h2>
              Hand Grafted <br />
              Pottery since 1990
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum. Duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla, ut commodo diam libero
              vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
              imperdiet. Nunc ut sem vitae risus posuere.
            </p>
          </div>
          <div>
            <h2>
              We Provide Premium <br />
              Pottery Products
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum. Duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla, ut commodo diam libero
              vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
              imperdiet. Nunc ut sem vitae risus posuere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePageSectionTwo;
