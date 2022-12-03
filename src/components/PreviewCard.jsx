import { FaPlay, FaPlus, FaThumbsUp, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";


function PreviewCard({ image, removePrev, title, id, type }) {
  return (
    <div
      id={image}
      onMouseLeave={(e) => removePrev(e)}
      className="prevCard z-10 w-[140%] shadow-lg shadow-black h-[280%] rounded-md scale-0 transition-all origin-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white max-sm:hidden"
    >
      <div className="w-full h-[50%] relative rounded-t-md">
        <img
          src={`https://image.tmdb.org/t/p/original/${image}`}
          alt=""
          className="prevExt w-full h-full rounded-t-md object-cover "
        />
        <h1 className="prevExt absolute pl-2 text-2xl bottom-0 text-white font-bold h-12 w-full flex justify-start items-center MovieNameBg">
          {title}
        </h1>
        <div className="prevExt p-4 bg-[#141414] h-full">
          <div className="flex justify-start items-center ">
            <Link to={`/-${id}-${type}`} className="mr-1">
              <FaPlay className="prevIcon  bg-white text-[#232323]" />
            </Link>
            <FaPlus className="prevIcon mr-1" />
            <FaThumbsUp className="mr-auto prevIcon" />
            <FaAngleDown className="prevIcon mr-1" />
          </div>
          <div className="flex mt-4 justify-start items-center ">
            <h1 className="text-green-400 font-bold mr-2">93% Matching</h1>
            <p className="text-white px-1 border text-sm mr-2">16+</p>
            <p className="text-white px-1 text-sm mr-2">1Season</p>
            <p className="text-white px-1 border text-xs mr-2">HD</p>
          </div>
          <div className="flex mt-4 justify-start items-center">
            <p className="text-white text-sm mr-2">Emotional</p>
            <p className="text-white text-sm mr-2">Teen</p>
            <p className="text-white text-sm mr-2">Ensample</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewCard;
