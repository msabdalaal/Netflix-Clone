import Logo from "../assets/Netflix_2015_logo.svg";
import avatar from "../assets/1077063.png";
import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaArrowDown } from "react-icons/fa";
import { useState } from "react";
function Navbar() {
  let [navBg, setNavBg] = useState(false);
  window.onscroll = () => {
    if (window.scrollY > 0) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  return (
    <header
      className={`z-20 fixed w-screen py-5 max-sm:px-5 px-16 flex gap-8 items-center  navBgNo ${
        navBg && `navBg`
      } text-white`}
    >
      <Link to="/" className="h-full max-sm:mr-auto">
        <img src={Logo} alt="Logo" className="h-7" />
      </Link>
      <nav className="mr-auto h-full whitespace-nowrap items-center flex max-sm:hidden">
        <ul className="items-center flex gap-4 text-sm font-light">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">TV Shows</Link>
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
      <FaSearch className="cursor-pointer" />
      <FaBell className="cursor-pointer" />
      <div className="profileNav flex justify-center items-center gap-2 h-8 cursor-pointer">
        <img
          src={avatar}
          alt="avatar"
          className="bg-white p-1 rounded-md h-full "
        />
        <FaArrowDown className="arrow w-3" />
      </div>
    </header>
  );
}

export default Navbar;
