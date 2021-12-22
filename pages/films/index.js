import Link from "next/link";

import Film from "./Film";

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
          <Film key={index} index={index} film={film} />
        ))}
      </div>
    </div>
  );
};

export default Films;
