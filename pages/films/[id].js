// Next JS Components
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
    },
  };
};

const FilmDetail = ({ film }) => {
  // Formatted the dates
  const formattedDate = film.created.split("T", 1);

  // let listOfSpecies = getData("species");

  return (
    <div className="primary">
      <h1>{film.title}</h1>
      <h2>Director: {film.director}</h2>
      <h2>Created At: {formattedDate}</h2>
      <h2>Producer: {film.producer}</h2>
      <h2>Release date: {film.release_date}</h2>
      <h4>Opening Crawl: {film.opening_crawl}</h4>

      <div>
        <Link href="/films">
          <a className="btn">Back to Movie List</a>
        </Link>
      </div>
    </div>
  );
};

export default FilmDetail;
