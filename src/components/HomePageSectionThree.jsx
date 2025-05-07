import styles from "./HomePageSectionThree.module.css";
import Float from "./Float";
import { NavLink } from "react-router-dom";

const items = [
  {
    name: "Gold & Black Pottery",
    price: 95.0,
    image: "goldblack.png ",
    category: "Vases",
    id: 4455986,
  },
  {
    name: "Orange Ceramic",
    price: 55.0,
    image: "orange.png",
    category: "Vases",
    id: 234456,
  },
];

function HomePageSectionThree() {
  const goldBlackPottery = items.filter(
    (item) => item.name === "Gold & Black Pottery"
  );
  const orangeCeramic = items.filter((item) => item.name === "Orange Ceramic");

  const formattedPottery = goldBlackPottery.map((item) =>
    item.name.split(" ").join("-")
  );

  const formattedCeramic = orangeCeramic.map((item) =>
    item.name.split(" ").join("-")
  );

  return (
    <section className={styles.container}>
      <div className={styles.sectionThree}>
        <div className={styles.float}>
          <Float>
            <p>FEATURED PRODUCTS</p>
          </Float>
        </div>
        {goldBlackPottery.map((item) => (
          <div className={styles.content} key={item.id}>
            <div className={styles.contentImg}>
              <img src="/bigvase.png" alt="Gold and Black Pottery" />
            </div>
            <div className={styles.description}>
              <h3>{item.name}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim
                veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex
                ea commodo consequatuisaute.
              </p>
              <NavLink
                className={styles.link}
                to={`/product/${item.id}?${formattedPottery}`}
              >
                <p>View Details</p>
              </NavLink>
            </div>
          </div>
        ))}
        {orangeCeramic.map((item) => (
          <div
            className={`${styles.content} ${styles.orangeCeramic}`}
            key={item.id}
          >
            <div className={styles.description}>
              <h3>{item.name}</h3>
              <p>
                Pri cu dico labores officiis, odio principes complectitur ad
                sea. Sea id doctus forensibus, nec lorem vocent aliquam eu.
                Aliquid definitiones id cum, ad meliore perpetua referrentur
                sed. Quas suscipit ad mea verear vivendo tincidunt.
              </p>
              <NavLink
                className={styles.link}
                to={`/product/${item.id}?${formattedCeramic}`}
              >
                <p>View Details</p>
              </NavLink>
            </div>
            <div className={`${styles.contentImg} ${styles.imgTwo}`}>
              <img src="/orangeceramic.png" alt=" Orange Ceramic" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomePageSectionThree;
