import React from "react";
import useFetch from "../contexts/useFetch";
import MovieSlider from "./MovieSlider";

export default function AllMovies() {
  let { result } = useFetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=e3f448859c36d626838c5cb838d0b93f&language=en-US`
  );

  let allMovies = result.genres?.map((genre) => {
    return (
      <MovieSlider
        key={genre.id}
        name={`${genre.name} Movies`}
        url={`https://api.themoviedb.org/3/discover/movie?api_key=e3f448859c36d626838c5cb838d0b93f&language=fr-FR&sort_by=popularity.desc&include_adult=false&with_genres=${genre.id}&page=1`}
      />
    );
  });
  return <>{allMovies}</>;
}
