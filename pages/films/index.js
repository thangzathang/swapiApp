import styles from "../../styles/Films.module.css";

import Link from "next/link";

// This function will run at build time.
export const getStaticProps = async () => {
  const APILink = "https://swapi.dev/api/films/";
  const res = await fetch(APILink);
  const parsedJSON = await res.json();
  const data = parsedJSON.results;

  return {
    props: {
      films: data,
    },
  };
};

const Films = ({ films }) => {
  return (
    <div>
      <h1>The Films</h1>
      {films.map((film, index) => (
        <Link href={`/films/` + film.url.split("/")[5]} key={film.url.split("/")[5]}>
          <a className={styles.single}>
            <h3>
              {index + 1}. {film.title}
            </h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Films;
