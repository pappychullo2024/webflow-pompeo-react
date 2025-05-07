import styles from "./ContactForm.module.css";
import Button from "./Button";

function ContactForm() {
  return (
    <div className={styles.form}>
      <h2>Drop Us a Line</h2>
      <form>
        <div className={styles.inputContainer}>
          <div className={styles.inputArea}>
            <label>Name:</label>
            <input
              className={`${styles.input} ${styles.name}`}
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className={styles.inputArea}>
            <label>Email Address:</label>
            <input
              className={`${styles.input} ${styles.email}`}
              type="text"
              placeholder="Your email"
              required
            />
          </div>
        </div>

        <div className={styles.inputArea}>
          <label>Message:</label>
          <textarea
            className={`${styles.input} ${styles.text}`}
            name="message"
            id="message"
            placeholder="How can we help?"
          ></textarea>
        </div>

        <Button>SENT MESSAGE</Button>
      </form>
    </div>
  );
}

export default ContactForm;
