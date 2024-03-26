import React from 'react';
import styles from './navigation.module.css';

export default function NavigationLayout() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about/">About</a></li>
          <li><a href="/projects/">Projects</a></li>
          <li><a href="/contact/">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
