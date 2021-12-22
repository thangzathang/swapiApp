import Head from "next/head";
import Image from "next/image";

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
        <h1 className={"title"}>Home</h1>
        <p className={"text"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus similique necessitatibus. Nostrum dolorum nemo eum ratione ad quisquam quasi qui placeat ducimus natus. Corporis?</p>
        <p className={"text"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellendus similique necessitatibus. Nostrum dolorum nemo eum ratione ad quisquam quasi qui placeat ducimus natus. Corporis?</p>
        <Link href="/films">
          <a className={"btn"}>See all Films List</a>
        </Link>
      </div>
    </>
  );
}
