import styles from "./Form.module.css";

function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.btnInput}>
        <input
          className={styles.subscribeInput}
          type="text"
          name="Email"
          placeholder="Enter your email"
          required
        />

        <button type="submit">Subscribe</button>
      </div>
      <div className={styles.checkBox}>
        <input type="checkbox" name="checkbox" />
        <p>Sign up for our newsletter</p>
      </div>
    </form>
  );
}

export default Form;
