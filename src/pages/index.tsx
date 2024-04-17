import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import React, { useRef } from "react";
import {
  motion as m,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import Header from "@/components/Header/Header.component";
import { Footer } from "@/components/Footer/Footer.component";

export default function Home() {
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  function Image({ id }: { id: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
      <section>
        <div ref={ref}>
          <img src={`/${id}.avif`} alt="A developer professional" />
        </div>
        <m.h2 style={{ y }}>{`#00${id}`}</m.h2>
      </section>
    );
  }

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Head>
        <title>Marcelo Bracet - Portfólio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <m.main className={styles.mainContainer}>
        {[1, 2, 3, 4, 5].map((image) => (
          <Image key={image} id={image} />
        ))}
        <m.div className={styles.progress} style={{ scaleX }} />
        <Footer />
      </m.main>
    </>
  );
}
