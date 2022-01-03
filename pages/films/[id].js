// Next JS Components
import { useState } from "react";
import Link from "next/link";

const APILink = "https://swapi.dev/api/films/";

export const getStaticPaths = async () => {
  const res = await fetch(APILink);
  const parsedJSON = await res.json();
  const data = parsedJSON.results;

  const paths = data.map((film) => {
    return {
      params: {
        id: film.url.split("/")[5].toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(APILink + id);
  const data = await res.json();

  return {
    props: {
      film: data,
      characters: data.characters,
      species: data.species,
      starships: data.starships,
      vehicles: data.vehicles,
      planets: data.planets,
    },
  };
};

export const getData = async (link) => {
  const res = await fetch(link);
  const data = await res.json();

  return {
    data,
  };
};

const FilmDetail = ({ film, characters, species, starships, vehicles, planets }) => {
  // Formatted the dates
  const formattedDate = film.created.split("T", 1);

  // From getStatic props
  let charactersUrl = [...characters];
  let speciesUrl = [...species];
  let starshipsUrl = [...starships];
  let vehiclesUrl = [...vehicles];
  let planetsUrl = [...planets];
  // let charactersList = [];

  // Best attempt so far;
  /*
  charactersUrl.forEach((item) => {
    console.log("Item is:", item);
    const getChar = getData(item);
    console.log("getChar is:", getChar);
    getChar.then(function (res) {
      console.log("Res is:", res.data);
      charactersList.push(res.data);
    });
  });
  */

  // Straight up try tp print off the data
  /*
  const printListOfChars = charactersUrl.map((item, index) => {
    const getChar = getData(item);
    getChar.then(function (res) {
      return <p key={item + index}>{res.data.name}</p>;
    });

    // const getChar = getData(item);
    // getChar.then(function (res) {
    // return <p key={item + index}>{item}</p>;
    // });
  });
  */

  const printListOfChar = charactersUrl.map((item, index) => {
    return <h3 key={item + index}>{item}</h3>;
  });

  const printListOfSpecies = speciesUrl.map((item, index) => {
    return <h3 key={item + index}>{item}</h3>;
  });

  const printListOfStarships = starshipsUrl.map((item, index) => {
    return <h3 key={item + index}>{item}</h3>;
  });

  const printListOfVehicles = vehiclesUrl.map((item, index) => {
    return <h3 key={item + index}>{item}</h3>;
  });

  const printListOfPlanets = planetsUrl.map((item, index) => {
    return <h3 key={item + index}>{item}</h3>;
  });

  // Singular print?
  /*
  const firstChar = getData(charactersList[0]);
  const oneChar = firstChar.then(function (result) {
    return result.data;
  });

  const printListOfChar = () => {
    return <h1>{oneChar.name}</h1>;
  };
  */

  // Get raw character and async await on that.
  // characters.forEach(async (item) => {
  //   const res = await fetch(item);
  //   const data = await res.json();
  //   console.log("Individual Data is:", data);
  //   if (data && charactersList.push(await data.name)) {
  //     console.log("Data is pushed");
  //   }
  // });

  // For the display - best so far.

  return (
    <div className="primary">
      <h1>{film.title}</h1>
      <h2>Director: {film.director}</h2>
      <h2>Created At: {formattedDate}</h2>
      <h2>Producer: {film.producer}</h2>
      <h2>Release date: {film.release_date}</h2>
      <h4>Opening Crawl: {film.opening_crawl}</h4>
      <br />
      <h3>Characters</h3>
      {printListOfChar}
      <br />
      <h3>Starships</h3>
      {printListOfStarships}
      <br />
      <h3>Species</h3>
      {printListOfSpecies}
      <br />
      <h3>Vehicles</h3>
      {printListOfVehicles}
      <br />
      <h3>Planets</h3>
      {printListOfPlanets}

      <div>
        <Link href="/films">
          <a className="btn">Back to Movie List</a>
        </Link>
      </div>
    </div>
  );
};

export default FilmDetail;
