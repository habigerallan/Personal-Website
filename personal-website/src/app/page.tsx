import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.introduction}>
        <h1>Welcome to my website!</h1>
        <p>This is my website. I hope you like it. Enjoy your time.</p>
      </section>

      <section className={styles.about}>
        <h2>About Me</h2>
        <p>Hi, I'm Allan Habiger. I am a student at University of Minneosta.</p>
      </section>

      <section className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectCard}>
          <a className={styles.projLink} target="_blank" href="https://github.com/habigerallan/TicTacToe-ML">TicTacToe-ML</a>
          <p>A TicTacToe implementation that allows the creation and visualization of a nueral network to play against.</p>
        </div>
      </section>

      <section className={styles.skills}>
        <h2>Skills</h2>
        <ul className={styles.skillsList}>
          <li>Temp1</li>
          <li>Temp2</li>
          <li>Temp3</li>
        </ul>
      </section>
    </div>
  );
}