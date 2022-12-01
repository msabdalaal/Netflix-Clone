import { FaPlay, FaPlus, FaThumbsUp, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

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
          <div className="flex justify-start items-center gap-1">
            <Link to={`/-${id}-${type}`}>
              <FaPlay className="prevIcon bg-white text-[#232323]" />
            </Link>
            <FaPlus className="prevIcon" />
            <FaThumbsUp className="mr-auto prevIcon" />
            <FaAngleDown className="prevIcon" />
          </div>
          <div className="flex mt-4 justify-start items-center gap-2">
            <h1 className="text-green-400 font-bold">93% Matching</h1>
            <p className="text-white px-1 border text-sm">16+</p>
            <p className="text-white px-1 text-sm">1Season</p>
            <p className="text-white px-1 border text-xs">HD</p>
          </div>
          <div className="flex mt-4 justify-start items-center gap-2">
            <p className="text-white text-sm">Emotional</p>
            <p className="text-white text-sm">Teen</p>
            <p className="text-white text-sm">Ensample</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewCard;
