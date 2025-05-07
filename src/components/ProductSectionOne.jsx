import styles from "./ProductSectionOne.module.css";

function ProductSectionOne() {
  return (
    <section className={styles.sectionOne}>
      <div className={styles.about}>
        <h2>Product Page</h2>
        <p>
          The attractions of ceramics lie partly in its contradictions. It is
          both difficult and easy, with an element beyond our control. It is
          both extremely fragile and durable. Like 'Sumi' ink painting, it does
          not lend itself to erasures and indecision.
        </p>
      </div>
    </section>
  );
}

export default ProductSectionOne;
