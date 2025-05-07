import styles from "./Float.module.css";

function Float({ children }) {
  return <div className={styles.float}>{children}</div>;
}

export default Float;
