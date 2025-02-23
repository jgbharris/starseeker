import Image from "next/image";
import StartButton from "../../../components/startButton/index";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <Image
          alt="space-background"
          src="/homepage-background.jpg"
          fill={true}
        />
      </div>
      <div className={styles.title}>
        <span>STAR SEEKER</span>
        <p className={styles.subtitle}>LET THE JOURNEY BEGIN</p>
      </div>
      <StartButton />
    </div>
  );
}
