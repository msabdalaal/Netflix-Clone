import Logo from "../assets/Netflix_2015_logo.svg";
import bg from "../assets/EG-en-20221128-popsignuptwoweeks-perspective_alpha_website_l.jpg";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="z-10 h-screen w-screen">
      <img
        src={bg}
        alt="background"
        className="absolute h-screen w-screen top-0 left-0 -z-10"
      />
      <div className="bg-[#00000097] h-screen w-screen flex flex-col items-center">
        <header className="p-8 w-screen flex justify-start items-center navBgNo">
          <img src={Logo} alt="Logo" className="h-12 mr-auto" />
          <select
            name="language"
            id="language"
            className="h-9 bg-transparent text-white mr-8 p-2"
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
        <div className="w-[50%] flex flex-col justify-center items-center mt-20">
          <h1 className="text-white text-6xl font-bold text-center">
            Unlimited movies, TV shows, and more.
          </h1>
          <p className="text-white mt-8 text-3xl text-center">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-white mt-8 text-xl text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="w-full flex mt-6 justify-center items-center">
            <input
              type="text"
              className="h-16  indent-4 w-[70%]"
              placeholder="Email address"
            />
            <Link
              to="/Login"
              className="w-[30%] bg-[#e50914] flex border-slate-500 justify-center items-center border h-16 text-white text-3xl"
            >
              Get Started &gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
