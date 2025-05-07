import styles from "./SocialMedia.module.css";
function SocialMedia() {
  return (
    <div className={styles.media}>
      <div className={`${styles.facebook} ${styles.socialMedia}`}></div>
      <div className={`${styles.twitter} ${styles.socialMedia}`}></div>
      <div className={`${styles.google} ${styles.socialMedia}`}></div>
    </div>
  );
}

export default SocialMedia;
