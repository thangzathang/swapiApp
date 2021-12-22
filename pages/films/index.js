import Link from "next/link";

import Film from "./Film";
import Image from "next/image";

// This function will run at build time.
export const getStaticProps = async () => {
  const APILink = "https://swapi.dev/api/films/";
  const res = await fetch(APILink);
  const parsedJSON = await res.json();
  const data = await parsedJSON.results;

  console.log("URL :", data);

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
      <div className="searchInput">
        <label htmlFor="">Movie Name: </label>
        <input type="text" name="filmSearch" />
      </div>
      <div className="filmFlexContainer">
        {films.map((film, index) => (
          <div key={index} className="filmContainer">
            <Image src={`/poster${film.episode_id}.jpg`} width={350} height={500} alt={`Star wars poster for ep ${film.episode_id}`} />
            <h1>
              <Link href={`/films/` + film.url.split("/")[5]} key={film.url.split("/")[5]}>
                {film.title}
              </Link>
            </h1>
            <h2>Directed By: {film.director}</h2>
            <h3>Release Date: {film.release_date}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Films;
