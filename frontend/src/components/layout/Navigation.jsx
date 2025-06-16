"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navigation.module.css";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.largeScreen}>
        <div className={styles.left}>
          <Image
            src="/globe.svg"
            height={60}
            width={60}
            className={styles.logo}
          />
        </div>

        <div className={styles.right}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="rooms">Rooms</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <div className={styles.avatar}>SA</div>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.mobileScreen}>
        <div className={styles.left}>
          <Image
            src="/globe.svg"
            height={60}
            width={60}
            className={styles.logo}
          />
        </div>
        <div className={styles.mobileRight}>
          <div className={styles.avatar}>SA</div>
          <div>
            {open ? (
              <X className={styles.icon} size={30} onClick={handleToggleMenu} />
            ) : (
              <Menu
                className={styles.icon}
                size={30}
                onClick={handleToggleMenu}
              />
            )}
          </div>
          <div
            className={`${styles.mobileNav} ${
              open ? styles.open : styles.close
            }`}
          >
            <ul>
              <li>
                <Link onClick={handleToggleMenu} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={handleToggleMenu} href="rooms">
                  Rooms
                </Link>
              </li>
              <li>
                <Link onClick={handleToggleMenu} href="about">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={handleToggleMenu} href="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
