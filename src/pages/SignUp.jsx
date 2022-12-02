import Logo from "../assets/Netflix_2015_logo.svg";
import bg from "../assets/EG-en-20221128-popsignuptwoweeks-perspective_alpha_website_l.jpg";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="z-10 h-screen bg-cover" style={{ backgroundImage: `url("${bg}")` }}>
      <div className="bg-[#00000097] h-screen w-full flex flex-col items-center">
        <header className="p-8 max-sm:p-6  w-full flex justify-start items-center navBgNo">
          <img src={Logo} alt="Logo" className="h-12 max-sm:h-6 mr-auto" />
          <select
            name="language"
            id="language"
            className="h-10 max-sm:text-xs bg-transparent text-white mr-8 max-sm:mr-2 p-2"
          >
            <option value="EN" defaultValue>
              English
            </option>
            <option value="AR">Arabic</option>
          </select>
          <Link
            to="/Login"
            className="p-5 h-10 bg-[#e50914] flex justify-center items-center  rounded-sm text-white"
          >
            Sign In
          </Link>
        </header>
        <div className="w-[50%] max-sm:w-[90%] flex flex-col justify-center items-center mt-20">
          <h1 className="text-white max-sm:text-3xl text-6xl font-bold text-center">
            Unlimited movies, TV shows, and more.
          </h1>
          <p className="text-white mt-8 max-sm:text-xl text-3xl text-center">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-white mt-8 max-sm:mt-4 text-xl max-sm:text-lg text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="w-full flex max-sm:flex-col mt-6 justify-center items-center">
            <input
              type="text"
              className="h-16  indent-4 w-[70%] max-sm:w-[100%]"
              placeholder="Email address"
            />
            <Link
              to="/Login"
              className="w-[30%] bg-[#e50914] max-sm:mt-4 max-sm:text-lg max-sm:w-auto max-sm:p-2 max-sm:border-none flex border-slate-500 justify-center items-center border h-16 text-white text-3xl"
            >
              Get Started &gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
