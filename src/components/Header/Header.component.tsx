import React from "react";
import { motion as m } from "framer-motion";
import styles from "./Header.module.scss";

import { navData } from "@/data/menu-data";

export default function Header() {
  return (
    <m.header className={styles.headerContainer}>
      <div>
        <nav>
          <ul className={styles.listItems}>
            {navData.map((item) => (
              <a key={item.id} href={item.path}>
                <m.li className={styles.navItem}>
                  <span>{item.title}</span>
                </m.li>
              </a>
            ))}
          </ul>
        </nav>
      </div>
    </m.header>
  );
}
