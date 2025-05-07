import styles from "./ProductSectionTwo.module.css";
import PageLink from "./PageLink";
import { useContext } from "react";
import PostContext from "./PostContext";
import { useParams } from "react-router-dom";
import Input from "./Input";
import SocialMedia from "./SocialMedia";

function ProductSectionTwo() {
  const { id } = useParams();
  const { handleAddToCart, items, isLoadingCart } = useContext(PostContext);

  const foundItem = items.find((obj) => obj.id === Number(id));

  if (!foundItem) {
    return <div>Object not found</div>;
  }

  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <img src={`/${foundItem.image}`} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.description}>
          <h3>PRODUCT DETAIL</h3>
          <h2>{foundItem.name}</h2>
          <span>$ {foundItem.price}.00 USD</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <PageLink />
        <div className={styles.details}>
          <h4>
            Categoty: <span> {foundItem.category}</span>
          </h4>
          <h4>
            Tracking Number: <span>{foundItem.id} </span>{" "}
          </h4>
          <h4 className={styles.share}>
            Share on:
            <span>
              <SocialMedia />
            </span>
          </h4>
          <div className={styles.quantity}>
            <Input />
            <button onClick={() => handleAddToCart(foundItem)}>
              {isLoadingCart ? "ADDING TO CART...." : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSectionTwo;
