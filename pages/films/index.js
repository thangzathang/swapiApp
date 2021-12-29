import Link from "next/link";

import Image from "next/image";
import React, { useState } from "react";

// This function will run at build time.
export const getStaticProps = async () => {
  const APILink = "https://swapi.dev/api/films/";
  const res = await fetch(APILink);
  const parsedJSON = await res.json();
  const data = await parsedJSON.results;

  return {
    props: {
      films: data,
    },
  };
};

const Films = ({ films }) => {
  // State for the search term
  const [search, setSearch] = useState("");

  // handleChange for every word/ keystroke entered
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // const [filteredFilms, setFilteredFilms] = useState(initialState);
  let filteredFilms;
  filteredFilms = films.filter((film) => film.title.toLowerCase().includes(search.toLowerCase()));

  // Set date later when the film Release date is loaded.
  let day = 0;
  let month = 0;
  let year = 0;

  return (
    <div>
      <div className="searchInput">
        <label htmlFor="">Search: </label>
        <input className="searchInputField" type="text" name="search" value={search} onChange={handleChange} />
      </div>
      <div className="filmFlexContainer">
        {filteredFilms.map((film, index) => (
          <div key={index} className="filmContainer">
            <div className="imageContainer">
              <Image src={`/poster${film.episode_id}.jpg`} width={350} height={500} alt={`Star wars poster for ep ${film.episode_id}`} />
            </div>
            <h1>
              <Link href={`/films/` + film.url.split("/")[5]} key={film.url.split("/")[5]}>
                {film.title}
              </Link>
            </h1>
            <div className="filmContent">
              <h2>Director: {film.director}</h2>
              <div className="noDisplay">
                {(year = film.release_date.split("-")[0])}
                {(month = film.release_date.split("-")[1])}
                {(day = film.release_date.split("-")[2])}
              </div>

              <h3>
                Release Date: {day}/{month}/{year}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Films;
