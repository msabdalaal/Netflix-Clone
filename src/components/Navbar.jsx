import Logo from "../assets/Netflix_2015_logo.svg";
import avatar from "../assets/1077063.png";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaBell,
  FaArrowDown,
  FaPen,
  FaSignOutAlt,
  FaExchangeAlt,
  FaQuestion,
} from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";

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
        className={`z-30 fixed w-screen py-5 max-md:py-2 max-sm:py-2 max-sm:px-4 px-16 flex items-center  navBgNo lg:${
          navBg ? ` navBg` : ``
        } ${
          navBg && type == `tv` ? `hidden` : ``
        } max-sm:flex text-white max-sm:bg-[#0000003e] ${
          mobileNav ? `max-sm:bg-black` : ``
        }`}
      >
        <IoMdMenu
          onClick={() => setMobileNav((e) => !e)}
          className="hidden max-sm:block text-3xl mr-8 max-sm:mr-4"
        />
        <Link to="/" className="h-full max-sm:mr-auto mr-8">
          <img src={Logo} alt="Logo" className="h-7 max-md:h-4 max-sm:h-6" />
        </Link>
        <nav className="mr-auto max-md:hidden md:hidden lg:flex h-full whitespace-nowrap items-center flex max-sm:hidden">
          <ul className="items-center flex gap-4 text-sm font-light">
            <li
              className={`${
                type == undefined ? `active` : ``
              } mr-4 max-sm:mr-2`}
            >
              <Link to="/">Home</Link>
            </li>
            <li className={`${type == `tv` ? `active` : ``} mr-8 max-sm:mr-4`}>
              <Link to="/TvShows">TV Shows</Link>
            </li>
            {/* <li>
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
            </li> */}
          </ul>
        </nav>
        <div className="tabletNav text-xs max-sm:hidden lg:hidden relative flex justify-center items-center md:mr-auto max-md:mr-auto">
          <h1 className="hover:cursor-pointer flex justify-center items-center">
            Browse
            <FaArrowDown className="ml-2" />
          </h1>
          <ul className="absolute hidden text-[#999] text-sm felx justify-center items-center text-center top-3 pt-5 bg-transparent w-52">
            <li className="w-full h-10 bg-[rgba(0,0,0,0.7)] hover:bg-[rgba(36,36,36,0.5)]">
              <Link
                to="/"
                className={`${
                  type == undefined ? `active` : ``
                } h-full flex justify-center items-center`}
              >
                Home
              </Link>
            </li>
            <li className="w-full h-10 bg-[rgba(0,0,0,0.7)] hover:bg-[rgba(36,36,36,0.5)]">
              <Link
                to="/TvShows"
                className={`${
                  type == `tv` ? `active` : ``
                } h-full flex justify-center items-center`}
              >
                Tv Shows
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`mobileNav hidden max-sm:block  transition-all ${
            mobileNav ? `translate-x-0` : `translate-x-[-45rem]`
          } absolute bg-black w-[65vw] h-screen top-[2.5rem] left-0`}
        >
          <div className="border-b px-5 py-4  pb-5">
            <div className="flex justify-start items-center">
              <div className="profileNav flex justify-center items-center mr-2 mb-4 h-8 cursor-pointer">
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
                <a href="">Account</a>
              </li>
              <li>
                <a href="">Help Center</a>
              </li>
              <li>
                <Link to="/">Sign Out Of Netflix</Link>
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
        <FaSearch className="cursor-pointer max-sm:hidden mr-8 max-sm:mr-4" />
        <FaBell className="cursor-pointer max-sm:hidden mr-8 max-sm:mr-4" />
        <div className="profileNav flex justify-center items-center h-8 cursor-pointer max-sm:hidden mr-8 max-sm:mr-4">
          <img
            src={avatar}
            alt="avatar"
            className="bg-white p-1 rounded-md h-full mr-2"
          />
          <FaArrowDown className="arrow w-3" />
          <ul className="absolute hidden top-10 pt-8 w-64 right-14 text-sm">
            <li className="w-full pl-4 flex justify-start items-center  h-10 bg-[rgba(0,0,0,0.9)] hover:underline">
              <FaPen className="mr-2" /> <a href="">Manage Profile</a>
            </li>
            <li className="w-full pl-4 flex justify-start items-center  h-10 bg-[rgba(0,0,0,0.9)] hover:underline">
              <FaSignOutAlt className="mr-2" /> <a href="">Exit Profile</a>
            </li>
            <li className="w-full pl-4 flex justify-start items-center  h-10 bg-[rgba(0,0,0,0.9)] hover:underline">
              <FaExchangeAlt className="mr-2" /> <a href="">Transfer Profile</a>
            </li>
            <li className="w-full pl-4 flex justify-start items-center  h-10 bg-[rgba(0,0,0,0.9)] hover:underline">
              <RiAccountCircleLine className="mr-2" /> <a href="">Account</a>
            </li>
            <li className="w-full pl-4 flex justify-start items-center  h-10 bg-[rgba(0,0,0,0.9)] hover:underline">
              <FaQuestion className="mr-2" /> <a href="">Help Center</a>
            </li>
            <li className="w-full pl-4 flex justify-center border-t items-center  h-10 bg-[rgba(0,0,0,0.9)] hover:underline">
              <a href="">Sign out of Netflix</a>
            </li>
          </ul>
        </div>
      </header>
      {type == `tv` ? (
        <div
          className={`z-20 max-sm:z-10 transition-all fixed ${
            !genreBg ? `translate-y-16` : ``
          } w-screen py-5 max-sm:py-2 max-sm:px-4 px-16 flex items-center ${
            navBg ? `navBg` : ``
          } max-sm:relative max-sm:translate-y-12`}
        >
          {type == `tv` ? (
            <h1 className="text-4xl font-bold mr-8 text-white max-sm:text-xl max-sm:text-[#999]">
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
