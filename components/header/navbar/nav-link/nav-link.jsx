"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./nav-link.module.css";

export const NavLink = ({ children, href }) => {
  const path = usePathname();
  console.log(path);

  return (
    <Link
      href={href}
      className={`${styles.link} ${path === href && styles.active}`}
    >
      {children}
    </Link>
  );
};
