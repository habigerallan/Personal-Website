import React from 'react';
import styles from './home.module.css';

export default function HomeLayout() {
  return (
    <div>
      <section>
        <h1>Welcome to my website!</h1>
        <p>This is my website. I hope you like it. Enjoy your time.</p>
      </section>

      <section>
        <h2>About Me</h2>
        <p>Hi, I&apos;m Allan Habiger. I am a student at University of Minneosta.</p>
      </section>

      <section>
        <h2>Projects</h2>
        <div>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/habigerallan/TicTacToe-ML">TicTacToe-ML</a>
          <p>A TicTacToe implementation that allows the creation and visualization of a nueral network to play against.</p>
        </div>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>Temp1</li>
          <li>Temp2</li>
          <li>Temp3</li>
        </ul>
      </section>
    </div>
  );
}
