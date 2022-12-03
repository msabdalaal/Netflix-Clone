import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function Slider({ content, name }) {
  function goLeft(e) {
    let element = e.target.parentElement.children[3].children[0];
    let offset = element.offsetLeft;
    if (element.offsetLeft < 0) {
      element.style.left = `${offset + screen.width}px`;
      // element.offsetWidth / 4
    } else {
      element.style.left = `0px`;
    }
  }
  function goRight(e) {
    let element = e.target.parentElement.children[3].children[0];
    let offset = element.offsetLeft;
    if (-element.offsetLeft < element.offsetWidth - window.innerWidth) {
      element.style.left = `${offset - screen.width}px`;
    } else {
      element.style.left = `0px`;
    }
  }
  return (
    <div className="slider flex pb-28 max-sm:pb-4 z-10 relative sliderBg flex-col pl-4 lg:pl-16 md:pl-16 translate-y-[-50%] md:translate-y-[-30%] max-md:translate-y-[-30%] max-sm:translate-y-14">
      <h1 className="text-xl z-10 text-white font-bold mb-2 max-sm:text-[#999]">
        {name}
      </h1>
      <div
        onClick={(e) => goLeft(e)}
        className="leftBtn z-20 flex w-16 h-32 max-sm:h-24 justify-center items-center bg-[#29292900] text-[#ffffff44] lg:text-transparent md:text-transparent hover:bg-[#2727274a] max-sm:hover:bg-transparent hover:text-white px-2 text-4xl hover:cursor-pointer absolute top-9 left-0"
      >
        <FaAngleLeft className="pointer-events-none" />
      </div>
      <div
        onClick={(e) => goRight(e)}
        className="leftBtn z-20 flex w-16 h-32 max-sm:h-24 justify-center items-center bg-[#29292900] text-[#ffffff44] lg:text-transparent md:text-transparent hover:bg-[#2727274a] max-sm:hover:bg-transparent hover:text-white px-2 text-4xl hover:cursor-pointer absolute top-9 right-0"
      >
        <FaAngleRight className="pointer-events-none z-30" />
      </div>
      <div className="sliderContainer z-10 relative w-screen h-28 ">
        <div
          id={`${name} slider`}
          className="slider flex absolute  left-0 h-32 max-sm:h-24 mb-20"
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export default Slider;
