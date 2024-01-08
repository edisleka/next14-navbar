import { NavLink } from "./nav-link/nav-link";
import styles from "./navbar.module.css";

const linksData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        {linksData.map((link) => (
          <li key={link.title}>
            <NavLink href={link.path}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
