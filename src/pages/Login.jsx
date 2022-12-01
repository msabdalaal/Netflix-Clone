import Logo from "../assets/Netflix_2015_logo.svg";
import bg from "../assets/EG-en-20221128-popsignuptwoweeks-perspective_alpha_website_l.jpg";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  function handleLogIn() {
    sessionStorage.setItem("loggedIn", true);
    window.location.hash = "/";
    window.location.reload();
  }
  return (
    <div className="z-10 h-screen w-screen">
      <img
        src={bg}
        alt="background"
        className="absolute h-screen w-screen top-0 left-0 -z-10"
      />
      <div className="bg-[#00000097] h-screen w-screen flex flex-col items-center">
        <header className="p-8 w-screen navBgNo">
          <img src={Logo} alt="Logo" className="h-12" />
        </header>
        <div className="flex flex-col bg-[#000000b6] p-14 gap-8">
          <h1 className="text-white text-4xl font-bold">Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            className="w-80 h-12 bg-[#333] text-white indent-6 rounded-sm"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-80 h-12 bg-[#333] text-white indent-6 rounded-sm"
          />
          <button
            onClick={handleLogIn}
            className="w-80 h-12 bg-[#e50914] flex justify-center items-center font-bold rounded-sm text-white"
          >
            Sign In
          </button>

          <div className="flex">
            <input
              type="checkbox"
              className="accent-[#b3b3b3] w-4 mr-2"
              name="remember"
              id="Remember"
            />
            <label htmlFor="Remember" className="text-[#b3b3b3] mr-auto">
              remember Me?
            </label>
            <a href="#" className="text-[#b3b3b3] hover:underline">
              Need help?
            </a>
          </div>
          <div>
            <p className="text-[#737373]">
              New to Netflix?{" "}
              <Link to="/SignUp" className="text-white">
                Sign up now
              </Link>
              .
            </p>
          </div>
        </div>
        <footer className="bg-[#000000b6] gap-32 text-[#737373] flex justify-center items-center absolute w-screen bottom-0">
          <div className="flex flex-col gap-1 p-2">
            <a href="#">Questions? Contact us.</a>
            <a href="#">FAQ</a>
            <a href="#">cookie Prefrences</a>
            <select name="language" id="language" className="bg-black ">
              <option value="EN" defaultValue>
                English
              </option>
              <option value="AR">العربية</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 p-2">
            <a href="#">Help Center</a>
            <a href="#">Corporate Information</a>
          </div>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy</a>
        </footer>
      </div>
    </div>
  );
}
