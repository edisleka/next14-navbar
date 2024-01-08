import styles from "./header.module.css";
import { Logo } from "@/components/header/logo/logo";
import { Navbar } from "@/components/header/navbar/navbar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.navContainer}>
        <Navbar />
      </div>
    </header>
  );
};
