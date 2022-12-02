import Logo from "../assets/Netflix_2015_logo.svg";
import avatar from "../assets/1077063.png";
import Mnav from "../assets/header_gradient.png";
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaArrowDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

import { useState } from "react";
function Navbar({ type, username }) {
  let [mobileNav, setMobileNav] = useState(false);
  let [navBg, setNavBg] = useState(false);
  let [genreBg, setGenreBg] = useState(false);
  window.onscroll = () => {
    if (window.scrollY > 0) {
      setNavBg(true);
      setGenreBg(true);
    } else {
      setNavBg(false);
      setGenreBg(false);
    }
  };
  return (
    <>
      <header
        className={`z-20 fixed w-screen py-5 max-sm:py-2  max-sm:px-4 px-16 flex gap-8 max-sm:gap-4 items-center  navBgNo lg:${
          navBg ? ` navBg` : ``
        } ${
          navBg && type == `tv` ? `hidden` : ``
        } max-sm:flex text-white max-sm:bg-[#0000003e] ${
          mobileNav ? `max-sm:bg-black` : ``
        }`}
      >
        <IoMdMenu
          onClick={() => setMobileNav((e) => !e)}
          className="hidden max-sm:block text-3xl"
        />
        <Link to="/" className="h-full max-sm:mr-auto">
          <img src={Logo} alt="Logo" className="h-7 max-sm:h-6" />
        </Link>
        <nav className="mr-auto h-full whitespace-nowrap items-center flex max-sm:hidden">
          <ul className="items-center flex gap-4 text-sm font-light">
            <li className={`${type == undefined ? `active` : ``}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`${type == `tv` ? `active` : ``}`}>
              <Link to="/TvShows">TV Shows</Link>
            </li>
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/">New & Popular</Link>
            </li>
            <li>
              <Link to="/">My List</Link>
            </li>
            <li>
              <Link to="/">Browse by Languages</Link>
            </li>
          </ul>
        </nav>

        <div
          className={`mobileNav hidden max-sm:block  transition-all ${
            mobileNav ? `translate-x-0` : `translate-x-[-30rem]`
          } absolute bg-black w-[65vw] h-screen top-[2.5rem] left-0`}
        >
          <div className="border-b px-5 py-4  pb-5">
            <div className="flex justify-start items-center">
              <div className="profileNav mr-2 flex justify-center items-center gap-2 h-8 cursor-pointer">
                <img
                  src={avatar}
                  alt="avatar"
                  className="bg-white p-1 h-full "
                />
              </div>
              <div className="text-[#999]">
                <h1 className="font-bold">{username}</h1>
                <p className="text-sm">Switch Profile</p>
              </div>
            </div>

            <ul className="text-[#999] font-bold">
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <Link to="/Login">Sign Out Of Netflix</Link>
              </li>
            </ul>
          </div>
          <ul className="flex text-[#999] font-bold flex-col justify-start items-start py-2">
            <li className={`py-1 ${type == undefined ? `active` : ``}`}>
              <Link to="/" className={`pl-5 h-full `}>
                Home
              </Link>
            </li>
            <li className={`py-1 ${type == `tv` ? `active` : ``}`}>
              <Link to="/TvShows" className={`pl-5 h-full`}>
                Tv Shows
              </Link>
            </li>
          </ul>
        </div>

        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="hidden indent-4 w-[35%] border max-sm:block bg-[#141414]"
        />
        <FaSearch className="cursor-pointer max-sm:hidden" />
        <FaBell className="cursor-pointer max-sm:hidden" />
        <div className="profileNav flex justify-center items-center gap-2 h-8 cursor-pointer max-sm:hidden">
          <img
            src={avatar}
            alt="avatar"
            className="bg-white p-1 rounded-md h-full "
          />
          <FaArrowDown className="arrow w-3" />
        </div>
      </header>
      {type == `tv` ? (
        <div
          className={`z-20 max-sm:z-10 transition-all fixed ${
            !genreBg ? `translate-y-16` : ``
          } w-screen py-5 max-sm:py-2 max-sm:px-4 px-16 flex gap-8 items-center ${
            navBg ? `navBg` : ``
          } max-sm:relative max-sm:translate-y-12`}
        >
          {type == `tv` ? (
            <h1 className="text-4xl font-bold text-white max-sm:text-xl max-sm:text-[#999]">
              TV Shows
            </h1>
          ) : (
            ``
          )}
          <select name="genre" id="genre" className="h-8 max-sm:hidden">
            <option value="Genre" defaultValue>
              Genre
            </option>
            <option value="Action">Action</option>
          </select>
        </div>
      ) : (
        ``
      )}
    </>
  );
}

export default Navbar;
