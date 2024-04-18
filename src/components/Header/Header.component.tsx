import React, { useState, useEffect } from "react";
import { motion as m, useAnimate } from "framer-motion";
import styles from "./Header.module.scss";
import { PORTFOLIO_OWNER } from "@/data/menu-data";

import { navData } from "@/data/menu-data";
import { Form } from "../Form/Form.component";

export default function Header() {
  const [scope, animate] = useAnimate();
  const [formIsVisible, setFormIsVisible] = useState(false);

  return (
    <m.header className={styles.headerContainer}>
      <div>
        <m.h1 className={styles.title}>{PORTFOLIO_OWNER}</m.h1>
      </div>
      <div>
        <nav>
          <m.ul ref={scope} className={styles.listItems}>
            {navData.map((item) =>
              item.id == "datamenu-3" ? (
                <m.button
                  key={item.title}
                  whileTap={{ scale: 0.9 }}
                  className={styles.contact}
                  onClick={() => setFormIsVisible(true)}
                >
                  <li className={styles.navItem}>
                    <span id="title">{item.title}</span>
                  </li>
                </m.button>
              ) : (
                <m.a key={item.title} className={styles.link}>
                  <li className={styles.navItem}>
                    <span id="title">{item.title}</span>
                  </li>
                </m.a>
              )
            )}
          </m.ul>
        </nav>
      </div>
      {formIsVisible && (
        <Form isVisible={formIsVisible} setIsVisible={setFormIsVisible} />
      )}
    </m.header>
  );
}
