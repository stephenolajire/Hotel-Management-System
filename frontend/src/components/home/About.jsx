"use client";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className={styles.section}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 50,
          duration: 0.8,
          delay: 0.2,
          ease: "easeInOut",
        }}
        viewport={{ once: false }}
        className={styles.aboutLeft}
      >
        <h1>About Us</h1>
        <p className={styles.aboutText}>
          Welcome to StephDev Hotel, where comfort meets elegance. Nestled in
          the heart of Ebonyi, we provide a warm and relaxing environment for
          travelers, business guests, and holidaymakers alike. With exceptional
          service, beautifully furnished rooms, and a commitment to your
          satisfaction, we are more than just a place to stay — we’re your home
          away from home. Whether you’re here for business or leisure, we look
          forward to making your stay truly memorable.
        </p>

        <Link href='/about'>
          <motion.button
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 0.8,
              delay: 0.2,
              ease: "easeInOut",
            }}
            viewport={{ once: false }}
            className={styles.aboutLeftBtn}
            whileHover={{ scale: 1.1, opacity: 0.8 }}
          >
            read more
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 50,
          duration: 0.8,
          delay: 0.2,
          ease: "easeInOut",
        }}
        viewport={{ once: false }}
        className={styles.aboutRight}
      >
        <Image
          src="/bg-1.jpg"
          height={200}
          width={100}
          className={styles.aboutImage}
        />
      </motion.div>
    </section>
  );
};

export default About;
