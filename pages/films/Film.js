import React from "react";

// Next JS Components
import Image from "next/image";
import Link from "next/link";

function Film({ film, index }) {
  //   const date = film.release_date.split("-");
  //   const formattedDate = date[2] + "/" + date[1] + "/" + date[0];

  console.log(film);
  return (
    <div className="filmContainer">
      <Image src={`/poster${film.episode_id}.jpg`} width={350} height={500} alt={`Star wars poster for ep ${film.episode_id}`} />
      <h1>
        <Link href={`/films/` + film.url.split("/")[5]} key={film.url.split("/")[5]}>
          {film.title}
        </Link>
      </h1>
      {/* <h2>Directed By: {film.director}</h2>
      <h3>Release Date: {formattedDate}</h3> */}
    </div>
  );
}

export default Film;