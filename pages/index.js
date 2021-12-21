import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Utils
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>SWAPI | Home</title>
        <meta name="keywords" content="swapi" />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus similique necessitatibus. Nostrum dolorum nemo eum ratione ad quisquam quasi qui placeat ducimus natus. Corporis?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus similique necessitatibus. Nostrum dolorum nemo eum ratione ad quisquam quasi qui placeat ducimus natus. Corporis?</p>
        <Link href="/films">
          <a className={styles.btn}>See all jedi</a>
        </Link>
      </div>
    </>
  );
}
