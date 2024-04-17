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
              <m.a
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.5,
                }}
                key={item.title}
                className={styles.link}
              >
                <m.li className={styles.navItem}>
                  <span>{item.title}</span>
                </m.li>
              </m.a>
            ))}
          </ul>
        </nav>
      </div>
    </m.header>
  );
}
