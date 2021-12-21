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
  return (
    <div>
      <h1>{film.title}</h1>
      <h3>Director: {film.director}</h3>
    </div>
  );
};

export default FilmDetail;
