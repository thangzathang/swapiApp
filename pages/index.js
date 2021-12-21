import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Utils
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Homeee</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus similique necessitatibus. Nostrum dolorum nemo eum ratione ad quisquam quasi qui placeat ducimus natus. Corporis?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus similique necessitatibus. Nostrum dolorum nemo eum ratione ad quisquam quasi qui placeat ducimus natus. Corporis?</p>
      <Link href="/films">
        <a>See all jedi</a>
      </Link>
    </div>
  );
}