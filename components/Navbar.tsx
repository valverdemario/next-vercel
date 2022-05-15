import React from "react";
import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";
export const Navbar = () => {
  const menuItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <nav className={styles.menu_container}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={href} text={text} href={href}></ActiveLink>
      ))}
    </nav>
  );
};
