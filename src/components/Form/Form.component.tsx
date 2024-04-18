"use client";

import React, { useState } from "react";
import styles from "./Form.module.scss";
import { motion, useAnimate } from "framer-motion";

type FormProps = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Form: React.FC<FormProps> = ({ isVisible, setIsVisible }) => {
  const [scope, animate] = useAnimate();

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return isVisible ? (
    <form
      ref={scope}
      className={styles.formContainer}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input className={styles.input} type="text" placeholder="Name" />
      <input className={styles.input} type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button onClick={() => handleSubmit()}>Send</button>
      <button onClick={() => setIsVisible(false)}>Close</button>
    </form>
  ) : null;
};
