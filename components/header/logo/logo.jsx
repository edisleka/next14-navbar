import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.svg";
import styles from "./logo.module.css";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" className={styles.logo} priority />
    </Link>
  );
};
