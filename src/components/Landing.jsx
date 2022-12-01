import landingBg from "../assets/AAAABSh6ie5g64jMNkI8pB0mG0LGG2gIQjecIVkp4AOmoqx1eMsxot40QT4Y.webp";
import landingLogo from "../assets/AAAABQ4dHD4Gos8f0GO-OcbYjSMhPY1GorjpsA3kISe27TXMZ7200W0VDERR.webp";
import { Link } from "react-router-dom";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import useFetch from "../contexts/useFetch";
import { useEffect, useState } from "react";
import BigPrev from "./BigPrev";

let randomNumber = Math.floor(Math.random() * 19);
function Landing() {
  let [prevOpen, setPrevOpen] = useState(false);
  let { result: movie } = useFetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=e3f448859c36d626838c5cb838d0b93f&language=fr-FR&sort_by=popularity.desc&include_adult=false&with_genres=28&page=1`
  );

  let id = movie?.results[randomNumber]?.id;
  let [result, setResult] = useState({ results: [] });
  useEffect(() => {
    try {
      fetch(
        `https://api.themoviedb.org/3/movie/${movie?.results[randomNumber]?.id}?api_key=e3f448859c36d626838c5cb838d0b93f&append_to_response=videos,images`
      )
        .then((e) => e.json())
        .then((e) => setResult(e));
    } catch (e) {}
  }, [movie]);
  function closeBigPrev(id) {
    setPrevOpen((e) => !e);
  }
  return (
    <section className="h-screen w-full relative flex justify-center items-start text-white flex-col z-0 max-sm:hidden">
      <div className="h-screen left-0 top-0 absolute w-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
          alt="Background"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <article className="z-10 w-6/12 absolute h-screen flex justify-center flex-col pl-16 mb-12  landingBg">
        <div className="mb-6 h-40">
          <img
            src={`https://image.tmdb.org/t/p/original/${
              result.images?.logos[0]?.file_path || landingLogo
            }`}
            alt="Landing Logo"
            className="h-full object-contain"
          />
        </div>
        <h1 className="text-2xl font-bold mb-4">{result.title}</h1>
        <p className="text-xl h-20 overflow-hidden mb-4">{result.overview}</p>
        <div className="flex justify-start items-center gap-4">
          <Link
            to={`/${id}`}
            className="transition-all flex justify-center items-center gap-2 px-8 py-3 font-bold bg-white hover:bg-[#7b7b7b] text-black rounded-lg"
          >
            <FaPlay className="text-2xl" />
            Play
          </Link>
          <button
            onClick={() => setPrevOpen(true)}
            className="transition-all flex justify-center items-center gap-2 px-8 py-3 font-bold bg-[#7b7b7b50] hover:bg-[#7b7b7b2c] text-white rounded-lg"
          >
            <FaInfoCircle className="text-3xl" />
            More Info
          </button>
        </div>
      </article>
      {prevOpen ? <BigPrev id={result.id} closeBigPrev={closeBigPrev} /> : ""}
    </section>
  );
}

export default Landing;
