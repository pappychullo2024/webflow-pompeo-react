import ContactForm from "./ContactForm";
import styles from "./ContactSectionTwo.module.css";
function ContactSectionTwo() {
  return (
    <section className={styles.sectionTwo}>
      <div className={styles.about}>
        <p>CONTACT US</p>
        <h2>Lets get in touch</h2>
      </div>
      <div className={styles.details}>
        <div>
          <h3>PHONE</h3>
          <p>+1 929 234 5678</p>
        </div>
        <div>
          <h3>LOCATION</h3>
          <p>
            2567 Fifth Ave, New York City,
            <br />
            NY 20035, USA
          </p>
        </div>
        <div>
          <h3>EMAIL</h3>
          <p>pompoe@pottery1990.com</p>
        </div>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.teaCup}></div>
        <div className={styles.form}>
          <img src="/blank.jpg" alt="" />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSectionTwo;
