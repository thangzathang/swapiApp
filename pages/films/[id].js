// Next JS Components
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Card from "../../components/Card";

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

  return (
    <div className="primary">
      {/* Top Two boxes */}
      <div className="boxContainer">
        <div className="boxOne">
          <h1>{film.title}</h1>
          <h2>Director: {film.director}</h2>
          <h2>Created At: {formattedDate}</h2>
          <h2>Producer: {film.producer}</h2>
          <h2>Release date: {film.release_date}</h2>
        </div>
        <div className="boxTwo">
          <h4>&quot;{film.opening_crawl}&quot; </h4>
        </div>
        <div className="posterBox">
          <div className="imageContainer">
            <Image src={`/poster${film.episode_id}.jpg`} width={350} height={500} alt={`Star wars poster for ep ${film.episode_id}`} />
          </div>
        </div>
      </div>

      {/* Middle Two Boxes */}
      {/*
      <div className="boxContainer">
        <div className="boxThree">
          <h3> See List of Character Button</h3>
          {printListOfChar}
          <Card>{printListOfChar}</Card>
        </div>
        <div className="boxFour">
          <h3>Starships</h3>
          {printListOfStarships}
        </div>
      </div>
      */}

      {/* Bottom Three Boxes */}
      {/* <div className="boxContainer">
        <div className="boxFive">
          <h3>Species</h3>
          {printListOfSpecies}
        </div>
        <div className="boxSix">
          <h3>Vehicles</h3>
          {printListOfVehicles}2
        </div>
        <div className="boxSeven">
          <h3>Planets</h3>
          {printListOfPlanets}
        </div>
      </div> */}

      <div>
        <Link href="/films">
          <a className="btn">Back to Movie List</a>
        </Link>
      </div>
    </div>
  );
};

export default FilmDetail;
