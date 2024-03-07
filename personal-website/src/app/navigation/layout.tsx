import React from 'react';
import styles from './navigation.module.css';

export default function NavigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <div>
        <nav className={styles.navContainer}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/">Home</a>
            </li>
            
            <li className={styles.navItem}>
              <a className={styles.navLink} href="/about/">About</a>
            </li>
            <li className={styles.navItem}>
                <a className={styles.navLink} href="/projects/">Projects</a>
            </li>
            <li className={styles.navItem}>
                <a className={styles.navLink} href="/contact/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        {children}
      </div>
    </body>
  );
}
