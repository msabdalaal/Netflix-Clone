import useFetch from "../contexts/useFetch";
import PreviewCard from "./PreviewCard";
import Slider from "./Slider";
import { useEffect, useState } from "react";
import BigPrev from "./BigPrev";

function MovieSlider({ name, url, type }) {
  let [prevOpen, setPrevOpen] = useState({});
  let { result } = useFetch(url);
  let showOpen = {};
  let content = result.results.map((show) => {
    showOpen = { ...showOpen, [show.id]: false };
    return (
      <>
        <div
          key={show.id}
          id={show.id}
          className={`cursor-pointer rounded-md max-sm:rounded-sm relative w-64 max-sm:w-48 aspect-[2/1] max-sm:aspect-[4/2] h-full bg-cover bg-no-repeat mr-2 max-sm:mr-1 bg-center`}
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${show.backdrop_path}")`,
            backgroundPosition: `0px -0px`,
          }}
          onMouseOver={(e) => showPrev(e, show.id)}
          onClick={() => {
            setPrevOpen((e) => {
              return { ...e, [show.id]: true };
            });
          }}
        >
          <PreviewCard
            removePrev={removePrev}
            image={show.backdrop_path}
            id={show.id}
            type={type}
            title={show.original_title}
          />
          <h1 className="absolute max-sm:hidden pointer-events-none pl-2 bottom-0 text-white font-bold h-12 w-full flex justify-start items-center MovieNameBg">
            {show.original_title ? show.original_title : show.name}
          </h1>
        </div>
        {prevOpen[show.id] ? (
          <BigPrev id={show.id} closeBigPrev={closeBigPrev} type={type} />
        ) : (
          ""
        )}
      </>
    );
  });
  useEffect(() => {
    setPrevOpen(showOpen);
  }, [result]);

  function closeBigPrev(id) {
    setPrevOpen((e) => {
      return { ...e, [id]: !e[id] };
    });
  }
  function showPrev(e, id) {
    if (e.target.id == id) {
      let ele = e.target.children[0];
      let setPrev = setTimeout(() => {
        ele.classList.remove("scale-0");
      }, 800);
      e.target.onmouseleave = () => clearTimeout(setPrev);
    }
  }
  function removePrev(e) {
    if (e.target.classList.contains("prevExt")) {
      e.target.parentElement.parentElement.classList.add("scale-0");
    }
  }
  return <Slider content={content} name={name} />;
}
export default MovieSlider;
