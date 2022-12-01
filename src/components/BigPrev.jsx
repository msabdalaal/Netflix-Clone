import { FaPlay, FaPlus, FaThumbsUp, FaAngleDown } from "react-icons/fa";
import React from "react";
import ReactDOM from "react-dom";
import useFetch from "../contexts/useFetch";
import { Link } from "react-router-dom";

export default function BigPrev({ id, closeBigPrev }) {
  let { result: Data } = useFetch(`
    https://api.themoviedb.org/3/movie/${id}?api_key=e3f448859c36d626838c5cb838d0b93f&append_to_response=videos`);
  return ReactDOM.createPortal(
    <div
      id={id}
      className="transition-all bigPrev h-screen w-screen rounded-md fixed z-50 top-0 left-0 bg-[#00000098]"
    >
      <div className=" my-8 max-sm:my-0 max-sm:w-screen flex  flex-col items-center bg-[#141414] min-h-screen w-content fixed  left-1/2 -translate-x-1/2 text-white">
        <button
          onClick={() => closeBigPrev(id)}
          className="absolute max-sm:right-4 z-10 top-4 right-8 w-10 h-10 bg-[#141414] rounded-full"
        >
          X
        </button>
        <img
          src={`https://image.tmdb.org/t/p/original/${Data.backdrop_path}`}
          alt="back_drop"
          className="h-1/2 rounded-t-md"
        />
        <div className="-translate-y-60 w-full px-16 max-sm:px-4 max-sm:py-44 py-28 bigPrevBg">
          <h1 className="text-4xl mb-8">{Data.title}</h1>
          <div className="flex justify-start items-center w-full gap-4">
            <Link to={`/${id}`}>
              <FaPlay className="h-10 w-24 p-2 rounded-md hover:bg-[#cccccc] hover:cursor-pointer bg-white text-[#232323]" />
            </Link>
            <FaPlus className="prevIcon" />
            <FaThumbsUp className="mr-auto prevIcon" />
            <FaAngleDown className="prevIcon" />
          </div>
          <div className="flex mt-8 justify-start items-center gap-2">
            <h1 className="text-green-400 font-bold">93% Matching</h1>
            <p className="text-white px-1 border text-sm">16+</p>
            <p className="text-white px-1 text-sm">1Season</p>
            <p className="text-white px-1 border text-xs">HD</p>
          </div>
        </div>
      </div>
      ;
    </div>,
    document.getElementById("Prev")
  );
}
