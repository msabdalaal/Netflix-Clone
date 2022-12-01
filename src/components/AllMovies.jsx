import React from "react";
import useFetch from "../contexts/useFetch";
import MovieSlider from "./MovieSlider";

export default function AllMovies({ type }) {
  let { result } = useFetch(
    `https://api.themoviedb.org/3/genre/${type}/list?api_key=e3f448859c36d626838c5cb838d0b93f&language=en-US`
  );

  let allMovies = result.genres?.map((genre) => {
    return (
      <MovieSlider
        key={genre.id}
        type={type}
        name={`${genre.name} ${type == "movie" ? `Movies` : ``}`}
        url={`https://api.themoviedb.org/3/${type}/popular?api_key=e3f448859c36d626838c5cb838d0b93f&with_genres=${genre.id}&page=1`}
      />
    );
  });
  return <>{allMovies}</>;
}
