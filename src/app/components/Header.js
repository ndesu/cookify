import styles from "@/app/page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <h1 className={styles.mainTitle}>cookify!</h1>
      </nav>
    </header>
  );
}